import { to } from "../utils/utils";
import {
    queryGetPosts,
    queryCreatePost
} from "../repositories/post.repository";
import express from "express";
import { User } from "../models/User";
import { canPostAs } from "../services/post.service";

export const handleGetPosts = query => async (req, res) => {
    const [err, posts] = await to(queryGetPosts(query));
    err ? res.status(500).json(err) : res.status(200).json(posts);
};

export const handleCreatePost = query => async (req: express.Request, res) => {
    const user: User = JSON.parse(req.header("user") || null);
    if (!user || !canPostAs(user, req.body.group_id)) {
        res.status(401).json(
            "User is not authorized to post as the specified group"
        );
        return;
    }

    const [err, ok] = await to(queryCreatePost(query, req.body));
    err ? res.status(400).json(err) : res.status(201).json({ success: true });
};
