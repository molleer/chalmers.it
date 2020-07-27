import express from "express";
import pg from "pg";
import { Cat } from "./models/Cat";
import getQuery from "./setup/db.setup";
import { to } from "./utils/utils";
import { queryGetCats } from "./repositories/cat.repository";

const app: express.Application = express();
const query = getQuery();

app.get("/", async (req, res) => {
    const [rows, err] = await to(queryGetCats(query));
    err ? res.status(500).json(err) : res.status(200).json(rows);
});

app.listen(process.env.PORT, () => {
    console.log("News is now running on port " + process.env.PORT);
});
