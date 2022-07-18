const data = require("./data.json");

const seedDatabase = async (client) => {
  const hasCollection = await client
    .db("databaseWeek4")
    .listCollections({ name: "accounts" })
    .hasNext();

  if (!hasCollection) {
    await client
      .db("databaseWeek4")
      .createCollection("accounts", function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
      });
  }

  const accountsCollection = await client
    .db("databaseWeek4")
    .collection("accounts");

  // Remove all the documents
  await accountsCollection.deleteMany({});

  console.log(`data is `);
  console.log(data);
  // Convert data to array version of elements
  const documents = data.map((dataItem) => {
    const { account_number, balance, account_changes } = dataItem;
    console.log(`data item is ${dataItem}`);

    //   const depictionElementKeys = Object.keys(dataItem).filter(
    //     (key) => !["account_number", "balance", "account_changes"].includes(key)
    //   );

    //   const depictionElements = depictionElementKeys.filter(
    //     (key) => dataItem[key] === 1
    //   );

    return {
      account_number: account_number,
      // Remove the extra quotation marks
      balance: balance,
      account_changes: account_changes,
    };
  });

  // Add our documents
  await accountsCollection.insertMany(documents);
};

module.exports = { seedDatabase };
