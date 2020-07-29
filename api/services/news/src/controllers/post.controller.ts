import { to } from "../utils/utils";
import {
    queryGetPosts,
    queryCreatePost
} from "../repositories/post.repository";

export const handleGetPosts = query => async (req, res) => {
    const [err, posts] = await to(queryGetPosts(query));
    err ? res.status(500).json(err) : res.status(200).json(posts);
};

export const handleCreatePost = query => async (req, res) => {
    const [err, ok] = await to(queryCreatePost(query, req.body));
    err ? res.status(400).json(err) : res.status(201).json({ success: true });
};
