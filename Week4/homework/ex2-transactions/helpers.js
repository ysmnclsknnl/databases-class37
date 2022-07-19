const getAccountChanges = (change_id, amount, date, remark) => {
  const remitterAccountChanges = {
    change_number: change_id,
    amount: amount * -1,
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

module.exports = { getAccountChanges };
