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

// Test assertArraysEqual using eqArrays
assertArraysEqual([1, 2, 3], [1, 2, 3]);  // This should pass
assertArraysEqual([1, 2, 3], [3, 2, 1]);  // This should fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);  // This should pass
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);  // This should fail