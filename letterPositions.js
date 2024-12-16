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

const letterPositions = function (sentence) {
    const results = {};
    for (let i = 0; i < sentence.length; i++) {
        const character = sentence[i];
        if (character === " ") {
            continue;
        }

        if(!results[character]) {
            results[character] = []
        }
        results[character].push(i);
    }
    return results;
};

