const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArrayEqual");

assertArraysEqual(([1, 2, 3], [1, 2, 3]));  
assertArraysEqual(([1, 2, 3], [3, 2, 1]));