const createTransferDocuments = (change_id, amount, date, remark) => {
  const remitterAccountChanges = {
    change_number: change_id,
    amount: -amount,
    changed_date: date,
    remark: remark,
  };

  const remitteeAccountChanges = {
    change_number: change_id,
    amount: amount,
    changed_date: date,
    remark: remark,
  };
  return { remitteeAccountChanges, remitterAccountChanges };
};

const hasEnoughBalance = async (
  client,
  remitterAccountId,
  amountToTransfer
) => {
  const remitterAccountDetails = await client
    .db("databaseWeek4")
    .collection("accounts")
    .findOne({ account_number: remitterAccountId });
  return remitterAccountDetails.balance >= amountToTransfer;
};
module.exports = { createTransferDocuments, hasEnoughBalance };
