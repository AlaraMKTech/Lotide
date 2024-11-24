const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    
    }
    
    if (actual !== expected) {
      console.log(`❌❌❌Assertion failed: ${actual} !== ${expected}`);
    }
  };

function head(array) {
    let firstValue = array[0];
    return array[0];
};
    
