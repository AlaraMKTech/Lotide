const assertEqual = require("./assertEqual");
const eqArrays = require("../eqArrays");
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect;
    if (eqObjects(actual, expected)) {
      console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
      console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
  };

// Test cases
const shirtObject = { color: 'red', size: 'medium' };
const anotherShirtObject = { size: 'medium', color: 'red' };
assertObjectsEqual(shirtObject, anotherShirtObject);

const longSleeveShirtObject = { size: 'medium', color: 'red', sleeveLength: 'long' };
assertObjectsEqual(shirtObject, longSleeveShirtObject);

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);

const object1 = { a: 1, b: [2, 3] };
const object2 = { a: 1, b: [2, 3] };
const object3 = { a: 1, b: [3, 2] };
const object4 = { a: 1, b: 2 };
assertObjectsEqual(object1, object2);
assertObjectsEqual(object1, object3);
assertObjectsEqual(object1, object4);