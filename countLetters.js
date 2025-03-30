const assertEqual = require('./assertEqual');

const countLetters = function(object) {
  const letterResults = {};
  for (let letter of object) {
    if (letterResults[letter]) {
      letterResults[letter] += 1;
    } else {
      letterResults[letter] = 1;
    }
  }
    return letterResults;
};

module.exports = countLetters;

