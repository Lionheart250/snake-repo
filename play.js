const net = require("net");
const connect = require("./client");// connect function
// establishes a connection with the game server
const conn = connect();
  // interpret incoming data as text
  conn.setEncoding("utf8");

  // event handler for data
  conn.on('data', (data) => {
    console.log("server says:", data);
  });
  return conn;


console.log("Connecting ...");
connect();