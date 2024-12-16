const eqArrays = require("../eqArrays");
const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
    it("returns [2] for [1, 2, 3]", () => {
      assert.deepEqual(middle([1, 2, 3]), [2]);
    });
  
    it("returns [] for ['5']", () => {
      assert.deepEqual(middle(['5']), []);
    });
  
    it("returns [] for an empty array", () => {
      assert.deepEqual(middle([]), []);
    });
  
    it("returns [] for a single-element array", () => {
      assert.deepEqual(middle(['hello']), []);
    });
  
    it("returns [10] for a mixed-type array [true, 10, 'test']", () => {
      assert.deepEqual(middle([true, 10, 'test']), [10]);
    });
  
    // Additional test case:
    it("returns [2, 3] for [1, 2, 3, 4]", () => {
      assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
    });
});