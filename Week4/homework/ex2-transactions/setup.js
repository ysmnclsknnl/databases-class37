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

  // In scope of this project remove all the documents to make work with the same documents everytime
  await accountsCollection.deleteMany({});

  // Add our documents
  await accountsCollection.insertMany(data);
};

module.exports = { seedDatabase };
