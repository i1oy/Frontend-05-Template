let assert = require("assert");
const { italic } = require("chalk");

// let add = require("./add.js");
import add from "./add";

describe("add function testing", function () {
    it("1 + 2 should be 3", function () {
        assert.equal(add(1, 2), 3);
    });
});
