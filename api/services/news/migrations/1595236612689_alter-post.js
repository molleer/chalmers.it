/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.addColumn("post", {
        slack: {
            type: "boolean",
            notNull: true,
            default: false
        }
    });
};

exports.down = pgm => {};
