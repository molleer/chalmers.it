import { queryFunction } from "../setup";

export const queryGetPosts = (query: queryFunction) =>
    query("SELECT * FROM post", [], res => res.rows);
