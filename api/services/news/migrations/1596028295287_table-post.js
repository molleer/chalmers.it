/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable("post", {
        id: "id",
        user_id: {
            type: "string",
            notNull: true
        },
        group_id: {
            type: "string",
            notNull: true
        },
        title: {
            type: "string",
            notNull: true
        },
        body: {
            type: "string",
            notNull: true
        },
        url: {
            type: "string",
            notNull: true
        },
        image_urls: {
            type: "text[]"
        }
    });
};

exports.down = pgm => {};
