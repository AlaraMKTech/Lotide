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

module.exports = without;