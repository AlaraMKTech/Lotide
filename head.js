const assertEqual = require("./assertEqual");

function head(array) {
    return array[0];
}

console.log("Running head.js alone");
assertEqual(head([1, 2, 3]), 1);

module.exports = head;

   