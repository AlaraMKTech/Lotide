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

const without = function(source, itemsToRemove) {
    const result = [];

    for (let i = 0; i < source.length; i++) {
        const currentElement = source[i];
        if (!itemsToRemove.includes(currentElement)) {
            result.push(currentElement);
        }
    }

    return result;
};

console.log(without([1, 2, 3], [1])); // [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // ["1", "2"]