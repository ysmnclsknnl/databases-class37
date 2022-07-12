const insert_account = [
  "USE accounts",
  "INSERT INTO account VALUES(101,10000),(102,100),(103,836464839.89),(104,37474748.12)",
];

const transfer_transaction = [
  "Use accounts",
  "START TRANSACTION",
  "UPDATE account SET balance=balance-1000 WHERE account_number=101",
  "UPDATE account SET balance=balance+1000 WHERE account_number=102",
  "INSERT INTO account_changes(account_number, amount, changed_date, remark) VALUES(101,1000,now(),'education fee'),(102,1000,now(),'education fee')",
];

export { insert_account, transfer_transaction };
