const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();

setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("./test-file.txt", () => {
  console.log("I/O has finished");
  console.log("----------------------------------");

  setTimeout(() => console.log("Timer 2 finished"), 0);
  setTimeout(() => console.log("Timer 3 finished"), 3000);
  setImmediate(() => console.log("Immediate 2 finished"));

  process.nextTick(() => console.log("Process nextTick "));

  crypto.pbkdf2("passwordStr", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  });

  crypto.pbkdf2("passwordStr", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  });
});

console.log("Top level code finished");

//Output for above
/*

- The two password encryptions happen almost at the same time because
  the encryption is offloaded to the threadPool and the threadPool has
  4 threads

- If we configure the number of threads in the threadPool the execution
  would happen diffently

Top level code finished
Timer 1 finished
Immediate 1 finished
I/O has finished
----------------------------------
Process nextTick 
Immediate 2 finished
Timer 2 finished
2012 Password encrypted
2026 Password encrypted
Timer 3 finished
*/
