const net = require("net");
const connect = require("./client");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  // Other key handling logic here
};

console.log("Connecting ...");
const conn = connect();

// Interpret incoming data as text
conn.setEncoding("utf8");

// Event handler for data
conn.on('data', (data) => {
  console.log("Server says:", data);
});

// Call the setupInput function
setupInput();
