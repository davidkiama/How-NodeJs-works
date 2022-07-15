/*  
console.log(arguments);

This returns an array of all the argumemnts proving that we are actually
inside a function (wrapper function)

console.log(require("module").wrapper);
//Output
'(function (exports, require, module, __filename, __dirname) { ',
'\n});'
*/

//module.exports
const C = require("./test-module-1");
const calc1 = new C();
console.log(calc1.add(2, 4)); // 6

//exports
// const calc2 = require("./test-module-2");
// console.log(calc2.multiply(2, 4)); // 8

const { add, multiply, divide } = require("./test-module-2");
console.log(divide(10, 2)); // 5
