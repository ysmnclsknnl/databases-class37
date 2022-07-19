const { v4: uuidv4 } = require("uuid");
const { MongoClient, ServerApiVersion } = require("mongodb");
const { transferCredits } = require("./transaction.js");
const { seedDatabase } = require("./setup.js");
const dotenv = require("dotenv");

dotenv.config();

async function main() {
  if (process.env.MONGODB_URL == null) {
    throw Error(
      `You did not set up the environment variables correctly. Did you create a '.env' file and add a package to create it?`
    );
  }
  const client = new MongoClient(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });

  try {
    await client.connect();

    //Create database and insert documents

    await seedDatabase(client);

    //Create a unique change number and transfer credits
    const change_number = uuidv4();

    await transferCredits(
      client,
      change_number,
      101,
      102,
      1000,
      "2022-10-12",
      "education fee"
    );
  } catch (err) {
    console.error(err);
  } finally {
    client.close();
  }
}

main();
