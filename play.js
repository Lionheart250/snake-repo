const net = require("net");
const { connect } = require("./client");
const { setupInput } = require("./input");
//call the connect funtion
const conn = connect();
//interpret data
conn.setEncoding("utf8");

// Event handler for data
conn.on('data', (data) => {
  console.log("Server says:", data);
});

// Call the setupInput function
setupInput();
