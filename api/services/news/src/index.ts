import express from "express";

const app: express.Application = express();

app.get("/", (req, res) => {
    res.send("Hello there!");
});

app.listen(3000, () => {
    console.log("The app is listening to port 3000");
});
