const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // Solution 1
  //Read file into a variable and send it back to the client
  /* This solution will force Node to read the file in its 
     entrirety, save it to memory then send it back
  */

  fs.readFile("./test-file.txt", (err, data) => {
    if (err) return console.log(err);

    res.end(data);
  });
});

server.listen(8000, () => {
  console.log("Server running on port 8000...");
});
