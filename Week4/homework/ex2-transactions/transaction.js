async function transferCredits(
  client,
  fromAccountId,
  toAccountId,
  amount,
  date,
  remark
) {
  const accountsCollection = client.db("databaseWeek4").collection("accounts");
  const session = client.startSession();

  try {
    await session.withTransaction(async () => {
      // Remove from fromUser
      await accountsCollection.updateOne(
        { account_number: fromAccountId },
        { $inc: { balance: amount * -1 } },
        { session }
      );

      // Add to toUser
      await accountsCollection.updateOne(
        { account_number: toAccountId },
        { $inc: { balance: amount } },
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
