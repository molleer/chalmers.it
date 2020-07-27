import express from "express";
import getQuery from "./setup/db.setup";
import { handleGetCats } from "./controllers/cat.controller";
import initRoutes from "./routers";

const app: express.Application = express();

initRoutes(app, getQuery(), () => express.Router());

app.listen(process.env.PORT, () => {
    console.log("News is now running on port " + process.env.PORT);
});
