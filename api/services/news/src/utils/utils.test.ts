import * as assert from "assert";
import { to } from "./utils";

describe("Simple Math Test", () => {
    it("Should return 'Success'", async () => {
        const [_, res] = await to(
            new Promise((resolve, _) => {
                resolve("Success");
            })
        );
        assert.equal(res, "Success");
    });
    it("Should return error", async () => {
        const error = new Error("Error");
        const [err] = await to(
            new Promise((_, reject) => {
                reject(error);
            })
        );
        assert.equal(err, error);
    });
});
