const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArrayEqual");

const middle = function(array) {
    if (array.length <= 2) {
      return [];
    } else if (array.length % 2 === 1) {
      return [array[Math.floor(array.length / 2)]];
    } else {
      return [array[Math.floor((array.length - 1) / 2)], array[Math.floor(array.length / 2)]];
    }
  };

module.exports = middle;
