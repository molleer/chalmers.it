import { queryFunction } from "../setup";
import * as express from "express";
import { handleGetPosts } from "../controllers/post.controller";

const getPostRouter = (router: express.Router, query: queryFunction) => {
    router.get("/news", handleGetPosts(query));
    return router;
};

export default getPostRouter;
