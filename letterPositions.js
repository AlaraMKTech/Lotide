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

module.exports = letterPositions;

