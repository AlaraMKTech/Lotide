const assertEqual = require("./assertEqual");

const head = function(array) {
    return array[0];
}

console.log("Running head.js alone");
assertEqual(head([1, 2, 3]), 1);

module.exports = head;

   