const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // Solution 1
  //Read file into a variable and send it back to the client
  /* This solution will force Node to read the file in its 
     entrirety, save it to memory then send it back

  fs.readFile("./test-file.txt", (err, data) => {
    if (err) return console.log(err);

    res.end(data);
  });

 */
  // Solution 2
  /*
  Here we create a stream that recieves data chunk by chunk.
  Once we recieve a chunk we immediately send it to the client 
  and wait for the stream to recieve another chunk.
  Once we have no more chunks we end the response indicating that 
  no more data will be sent

  Problem with this solution is the readable stream is much faster than
  sending the stream over the network. This will overwhelm the response stream 
  which can't handle all the incoming data so fast. 
  THis is called backPressure
 

  const readable = fs.createReadStream("./testt-file.txt");

  readable.on("data", (chunk) => {
    res.write(chunk);
  });

  readable.on("end", () => {
    res.end();
  });

  readable.on("error", (err) => {
    console.log(err);
    res.statusCode = 500;
    res.end("File not found");
  });

    */

  // Solution 3
  /* The pipe method will handle the speed of data coming in and going out
     hence solving the backpressure problem 
     
  */
  const readable = fs.createReadStream("./test-file.txt");
  readable.pipe(res);
});

server.listen(8000, () => {
  console.log("Server running on port 8000...");
});
