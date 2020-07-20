import express from "express";
import pg from "pg";
import { Cat } from "./models/Cat";

const app: express.Application = express();
const pool = new pg.Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME
});

app.get("/", (req, res) => {
    pool.query<Cat>("SELECT * FROM cat", [])
        .then(val => res.json(val.rows))
        .catch(err => {
            console.log(err);
            res.send("Error");
            res.status(500);
        });
});

app.listen(process.env.PORT, () => {
    console.log("News is now running on port " + process.env.PORT);
});
