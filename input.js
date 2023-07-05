let conn;

const setupInput = function (connection) {
  conn = connection;
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
  } else if (key === 'w') {
    conn.write("Move: up");
  } else if (key === 'a') {
    conn.write("Move: left");
  } else if (key === 's') {
    conn.write("Move: down");
  } else if (key === 'd') {
    conn.write("Move: right");
  } else if (key  === '1') {
    conn.write("say: hi there");
  }
};

module.exports = {
  setupInput,
};








