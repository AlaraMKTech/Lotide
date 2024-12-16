const assertEqual = require("./assertEqual");

const findKeyByValue = (object, value) => {
  for (let key of Object.keys(object)) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;

  // TEST CODE
  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1, 1);

  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire",
  };
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // Expected to pass
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // Expected to pass