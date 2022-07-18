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

  // Add our documents
  await accountsCollection.insertMany(data);
};

module.exports = { seedDatabase };
