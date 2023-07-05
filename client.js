const net = require("net");
const { IP, port } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: port,
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: JML");
  });

  return conn;
};

module.exports = {
  connect,
};

