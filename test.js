const { describe, test } = require("node:test");
const assert = require("node:assert");

const op = require("operaciones");

describe("test operacions", () => {
    test("test suma", () => {
        assert.strictEqual(op.suma(3, 4, 5, 1, 2), 15);
        assert.strictEqual(op.suma(), 0);
        assert.strictEqual(op.suma(-1, 1, -1, 1), 0);
        assert.strictEqual(op.suma(-1, 1, 0, -70), -70);
    });
    
    test("test multiplica", () => {
        assert.strictEqual(op.multiplica(3, 4, 5, 1, 2), 120);
        assert.strictEqual(op.multiplica(), 1);
        assert.strictEqual(op.multiplica(-1, 1, -1, 1), 1);
        assert.strictEqual(op.multiplica(-1, 1, 0, -70), 0);
    });
});
