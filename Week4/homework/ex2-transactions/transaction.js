const { createTransferDocuments, hasEnoughBalance } = require("./helpers.js");

async function transferCredits(
  client,
  change_id,
  remitterAccountId,
  remitteeAccountId,
  amount,
  date,
  remark
) {
  //Check whether remitter has enough balance to send
  const hasRemitterEnoughBalance = await hasEnoughBalance(
    client,
    remitterAccountId,
    amount
  );
  if (!hasRemitterEnoughBalance) {
    throw "Your balance is not enough to make this transfer ";
  }

  //Create Transfer Documents For Remitter and Remittee

  const { remitterAccountChanges, remitteeAccountChanges } =
    createTransferDocuments(change_id, amount, date, remark);

  const accountsCollection = client.db("databaseWeek4").collection("accounts");
  const session = client.startSession();

  try {
    await session.withTransaction(async () => {
      // Remove from Remitter

      await accountsCollection.updateOne(
        { account_number: remitterAccountId },
        {
          $inc: { balance: -amount },
          $addToSet: {
            account_changes: remitterAccountChanges,
          },
        },

        { session }
      );

      // Add to Remittee
      await accountsCollection.updateOne(
        { account_number: remitteeAccountId },
        {
          $inc: { balance: amount },
          $addToSet: {
            account_changes: remitteeAccountChanges,
          },
        },

        { session }
      );
    });
    console.log(
      ` £${amount} is  successfully transferred  from ${remitterAccountId} to ${remitteeAccountId} `
    );
  } catch (err) {
    console.log("transaction is abborted");
    await session.abortTransaction();
  } finally {
    await session.endSession();
  }
}

module.exports = { transferCredits };
