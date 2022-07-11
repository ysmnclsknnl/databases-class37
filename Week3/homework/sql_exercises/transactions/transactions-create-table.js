const create_table_transaction = [
  "START TRANSACTION",
  "CREATE TABLE IF NOT EXISTS account(account_number INT, balance DOUBLE(12,2) DEFAULT 0,PRIMARY KEY(account_number))",
  "CREATE TABLE IF NOT EXISTS account_changes(change_number INT NOT NULL, account_number INT NOT NULL , amount DOUBLE(8,2) NOT NULL, changed_date DATETIME , remark VARCHAR(30) NOT NULL, FOREIGN KEY(account_number) REFERENCES account(account_number),PRIMARY KEY (change_number))",
];
