const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    
    }
    
    if (actual !== expected) {
      console.log(`❌❌❌Assertion failed: ${actual} !== ${expected}`);
    }
  };

const countLetters = function(object) {
  const letterResults = {};
  for (let letter of object) {
    if (letterResults[letter]) {
      letterResults[letter] += 1;
    } else {
      letterResults[letter] = 1;
    }
  }
    return letterResults;
};


    
  // TEST CODE
  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1, 1);

