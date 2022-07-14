const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("newSale", () => {
  console.log("There was a new sale");
});

myEmitter.on("newSale", () => {
  console.log({ customerName: "Kiama" });
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are ${stock} items left in stock`);
});

myEmitter.emit("newSale", 9);

// Output of above

/*
- Normal output behaviour since the executions happens scyhronously

There was a new sale
{ customerName: 'Kiama' }
There are 9 items left in stock

*/
