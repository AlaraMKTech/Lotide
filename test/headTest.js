const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("returns undefined for an empty array", () => {
    assert.strictEqual(head([]), undefined);
  });

  it("returns the only element for a single-element array", () => {
    assert.strictEqual(head(['hello']), 'hello');
  });

  it("returns the first element for a mixed-type array", () => {
    assert.strictEqual(head([true, 10, 'test']), true);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  
});
