const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    
    }
    
    if (actual !== expected) {
      console.log(`❌❌❌Assertion failed: ${actual} !== ${expected}`);
    }
  };
    
  // TEST CODE
  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1, 1);

function findKey(object, callback) {
    for (let key in object) {
        if (callback(object[key])) {
            return key;
        }
    }
    return undefined;
};

const result1 = findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  );

  assertEqual(result1, "noma"); 