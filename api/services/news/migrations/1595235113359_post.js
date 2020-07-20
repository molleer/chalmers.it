/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable("post", {
        id: "id",
        posted_by: {
            type: "text",
            notNull: true
        },
        posted_as: {
            type: "text",
            notNull: true
        },
        body: {
            type: "text",
            notNull: true
        },
        createdAt: {
            type: "timestamp",
            notNull: true,
            default: pgm.func("current_timestamp")
        },
        editedAt: {
            type: "timestamp"
        }
    });
};

exports.down = pgm => {};
