const fs = require("fs");
/*
setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("./test-file.txt", () => console.log("I/O has finished"));

console.log("Top level code finished");

//Output of above

Top level code finished
Timer 1 finished
Immediate 1 finished
I/O has finished
*/

//----------------------------------------------------------------------//

/*
setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("./test-file.txt", () => {
  console.log("I/O has finished");
  console.log("----------------------------------");

  setTimeout(() => console.log("Timer 2 finished"), 0);
  setTimeout(() => console.log("Timer 3 finished"), 3000);
  setImmediate(() => console.log("Immediate 2 finished"));
});

console.log("Top level code finished");


// Output of above
- Here the event loop will not exit untill the timeout => 3000
  expires

- setImmediate runs immediately after I/0 polling phase if its 
  in a callback like we have in this case, hence the output
  'Immediate 2 finished' comes before 'Timer 2 finished'


Top level code finished
Timer 1 finished
Immediate 1 finished
I/O has finished
----------------------------------
Immediate 2 finished
Timer 2 finished
Timer 3 finished
*/

//----------------------------------------------------------------------//

/*
setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("./test-file.txt", () => {
  console.log("I/O has finished");
  console.log("----------------------------------");

  setTimeout(() => console.log("Timer 2 finished"), 0);
  setTimeout(() => console.log("Timer 3 finished"), 3000);
  setImmediate(() => console.log("Immediate 2 finished"));

  process.nextTick(() => console.log("Process nextTick has entered the chat"));
});

console.log("Top level code finished");


// Output of above

- Process.nextTick is executed immediately after the current phase 


Top level code finished
Timer 1 finished
Immediate 1 finished
I/O has finished
----------------------------------
Process nextTick has entered the chat
Immediate 2 finished
Timer 2 finished
Timer 3 finished
*/

//----------------------------------------------------------------------//

/*
setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("./test-file.txt", () => {
  console.log("I/O has finished");
  console.log("----------------------------------");

  setTimeout(() => console.log("Timer 2 finished"), 0);
  setTimeout(() => console.log("Timer 3 finished"), 3000);
  setImmediate(() => console.log("Immediate 2 finished"));

  process.nextTick(() => console.log("Process nextTick has entered the chat"));
});

console.log("Top level code finished");

process.nextTick(() => console.log("Process nextTick as top-level"));

// Output for above


Top level code finished
Process nextTick as top-level
Timer 1 finished
Immediate 1 finished
I/O has finished
----------------------------------
Process nextTick has entered the chat
Immediate 2 finished
Timer 2 finished
Timer 3 finished

*/
