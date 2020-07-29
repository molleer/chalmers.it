import { queryFunction } from "../setup";
import { Post } from "../models/Post";

export const queryGetPosts = (query: queryFunction) =>
    query("SELECT * FROM post", [], res => res.rows);

export const queryCreatePost = (query: queryFunction, post: Post) =>
    query(
        "INSERT INTO post (user_id, group_id, title, body, url, image_urls) VALUES ($1, $2, $3, $4, $5, $6)",
        [
            post.user_id,
            post.group_id,
            post.title,
            post.body,
            post.url,
            post.image_urls
        ],
        res => res.rowCount > 0
    );
