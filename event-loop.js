const fs = require("fs");

setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("./test-file.txt", () => console.log("I/O has finished"));

console.log("Top level code finished");

//Output of above
/*
Top level code finished
Timer 1 finished
Immediate 1 finished
I/O has finished
*/
