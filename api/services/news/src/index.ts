import express from "express";

const app: express.Application = express();

app.get("/", (req, res) => {
    res.send("Hello there!");
});

app.listen(process.env.PORT, () => {
    console.log("News is now running on port " + process.env.PORT);
});
