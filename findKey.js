const assertEqual = require('./assertEqual');

function findKey(object, callback) {
    for (let key in object) {
        if (callback(object[key])) {
            return key;
        }
    }
    return undefined;
};

module.exports = findKey;