const assertEqual = require("../assertEqual");

console.log(assertEqual !== undefined ? "assertEqual module loaded" : "Failed to load assertEqual module");
assertEqual(1, 1);