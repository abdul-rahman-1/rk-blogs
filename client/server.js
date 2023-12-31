import express from "express";
import { MongoClient } from "mongodb";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const app = express();
const port = process.env.REACT_APP_PORT;
const serv = process.env.REACT_APP_SERV;
const baseUrl = `http://localhost:${port}`;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the Blog API!");
});

app.get("/api/blogs", async (req, res) => {
  const providedKey = req.headers["serv"];

  if (providedKey !== serv) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  let client;
  try {
    const mongoUri = process.env.REACT_APP_MONGO_URI;
    client = new MongoClient(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();

    const db = client.db("Blog");
    const blogs = await db.collection("Blogs").find({}).toArray();

    res.json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    if (client) {
      await client.close();
    }
  }
});

app.listen(port, () => {
  console.log(`Server Is Active and Connected to Mongodb And Full Secured`);
});
