const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
    }
};

const eqArrays = function(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}; 

// Test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);  
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);  

const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
            return false;
        }
    } else {
        if (object1[key] !== object2[key]) {
            return false;
        }
    }
  }
  return true;
};

const object1 = { a: 1, b: [2, 3] };
const object2 = { a: 1, b: [2, 3] };
const object3 = { a: 1, b: [3, 2] };
const object4 = { a: 1, b: 2 };

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject, longSleeveShirtObject);