import { to } from "../utils/utils";
import { queryGetPosts } from "../repositories/post.repository";

export const handleGetPosts = query => async (req, res) => {
    const [err, posts] = await to(queryGetPosts(query));
    err ? res.status(500).json(err) : res.status(200).json(posts);
};
