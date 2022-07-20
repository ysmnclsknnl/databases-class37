import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

async function getTotalPopulationOfTheCountryPerYear(client, country) {
  const pipeline = [
    {
      $match: {
        Country: country,
      },
    },
    {
      $group: {
        _id: "$Year",
        countPopulation: {
          $sum: {
            $sum: ["$F", "$M"],
          },
        },
      },
    },
    {
      $sort: {
        _id: 1,
      },
    },
  ];
  const aggCursor = client
    .db("databaseWeek4")
    .collection("population_pyramid")
    .aggregate(pipeline);

  await aggCursor.forEach((result) => console.log(result));
}

async function getTotalPopulationForAnAgeRangeandAYear(client, ageRange, year) {
  const pipeline = [
    {
      $match: {
        Year: year,
        Age: ageRange,
        Country: {
          $in: [
            "AFRICA",
            "ASIA",
            "EUROPE",
            "LATIN AMERICA AND THE CARIBBEAN",
            "NORTHERN AMERICA",
            "OCEANIA",
          ],
        },
      },
    },
    {
      $addFields: {
        TotalPopulation: {
          $sum: ["$M", "$F"],
        },
      },
    },
    {
      $sort: {
        Country: 1,
      },
    },
  ];

  const aggCursor = client
    .db("databaseWeek4")
    .collection("population_pyramid")
    .aggregate(pipeline);

  await aggCursor.forEach((result) => {
    console.log(result);
  });
}

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

    await getTotalPopulationOfTheCountryPerYear(client, "Netherlands");

    await getTotalPopulationForAnAgeRangeandAYear(client, "100+", 2020);
  } catch (err) {
    console.error(err);
  } finally {
    client.close();
  }
}

main();
