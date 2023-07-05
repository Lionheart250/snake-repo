const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: 50541, // PORT number here,
  });

  conn.on("connect", () => {
    console.log("Sucessfully connected to game server");
    conn.write("Name: JML");
    //conn.write("Move: up");
  });

  return conn;
};
  module.exports = connect;