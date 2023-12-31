import express from "express";
import { MongoClient } from "mongodb";
import cors from "cors";

const app = express();
const port = 34334;
const serv = `abdul1234`;
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
    const mongoUri = `mongodb+srv://AdminClint0001:uTYZ4fPph7whTpXC@cluster0.eifjnhd.mongodb.net/Blog`;
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
  console.log(`Server Is Active and Connected to Mongodb And Full Secured  `+baseUrl + ` `+  serv);
});
