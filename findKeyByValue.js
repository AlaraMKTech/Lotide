const findKeyByValue = (object, value) {
    for (let key of Object.keys(object)) {
        if (object[key] === value) {
            return key;
        }
    }
    return undefined;
};

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

  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire",
  };
  
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);