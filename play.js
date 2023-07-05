const net = require("net");
const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const conn = connect();

conn.on("connect", () => {
  console.log("Successfully connected to game server");
  conn.write("Name: JML");
});

setupInput(conn);
