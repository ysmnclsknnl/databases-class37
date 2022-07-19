const { getAccountChanges } = require("./helpers.js");

async function transferCredits(
  client,
  change_id,
  fromAccountId,
  toAccountId,
  amount,
  date,
  remark
) {
  const { remitterAccountChanges, remitteeAccountChanges } = getAccountChanges(
    change_id,
    amount,
    date,
    remark
  );

  const accountsCollection = client.db("databaseWeek4").collection("accounts");
  const session = client.startSession();

  try {
    await session.withTransaction(async () => {
      // Remove from fromUser

      await accountsCollection.updateOne(
        { account_number: fromAccountId },
        {
          $inc: { balance: amount * -1 },
          $addToSet: {
            account_changes: remitterAccountChanges,
          },
        },

        { session }
      );

      // Add to toUser
      await accountsCollection.updateOne(
        { account_number: toAccountId },
        {
          $inc: { balance: amount },
          $addToSet: {
            account_changes: remitterAccountChanges,
          },
        },

        { session }
      );
    });
  } catch (err) {
    console.log("transaction is abborted");
    await session.abortTransaction();
  } finally {
    await session.endSession();
  }
}

module.exports = { transferCredits };
