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

const assertArraysEqual = function(actual, expected) {
    if (eqArrays(actual, expected)) {
        console.log(`✅ Assertion Passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
    } else {
        console.log(`❌ Assertion Failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
    }
};

const middle = function(array) {
  if (array.length <= 2) {
  return[];  
  } else if (array.length % 2 === 1) {
    return[array[Math.floor]] 
  } else {
    return [array[Math.floor], array[Math.floor]];
  }
};

middle([1, 2, 3, 4, 5]);
