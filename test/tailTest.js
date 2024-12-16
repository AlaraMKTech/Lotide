const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns [] for ['5']", () => {
    assert.deepEqual(tail(['5']), []);
  });

  it("returns [] for an empty array", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns [] for a single-element array", () => {
    assert.deepEqual(tail(['hello']), []);
  });

  it("returns [10, 'test'] for a mixed-type array [true, 10, 'test']", () => {
    assert.deepEqual(tail([true, 10, 'test']), [10, 'test']);
  });
});