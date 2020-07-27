import express from "express";
import pg from "pg";
import { Cat } from "./models/Cat";
import getQuery from "./setup/db.setup";
import { to } from "./utils/utils";

const app: express.Application = express();
const query = getQuery();

app.get("/", async (req, res) => {
    const [rows, err] = await to(
        query("SELECT * FROM cat", [], res => res.rows)
    );
    if (err) {
        res.status(500).json(err);
        return;
    }
    res.status(200).json(rows);
});

app.listen(process.env.PORT, () => {
    console.log("News is now running on port " + process.env.PORT);
});
