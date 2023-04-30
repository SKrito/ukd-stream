const fs = require("fs");
const readline = require("readline");

let buffer = Buffer.from([]);
const rStream = fs.createReadStream("stream.txt");

//  1
// let counter = 0;

// rStream.on("data", (chunk) => {
//   buffer = Buffer.concat([buffer, chunk]);
//   counter++;
// });

// rStream.on("end", () => {
//   const bufferLog = buffer.toString().split(" ").length;
//   console.log("Кількість слів у тексті:", bufferLog);
// });

// *

const rl = readline.createInterface({ input: rStream });

let counter = 0;

rl.on("line", (line) => {
  const words = line.split(/\s+/); 
  counter += words.length; 
});

rl.on("close", () => {
  console.log(`Кількість слів у тексті: ${counter}`);
});
