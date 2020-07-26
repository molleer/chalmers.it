import React from "react";
import { NewsItem, NewsForm } from "../cthit/common/news";
export default {
    title: "News"
};

export const NewsItems = () => {
    return (
        <>
            <NewsItem />
        </>
    );
};

export const NewsForms = () => {
    return (
        <>
            <NewsForm />
        </>
    );
};
