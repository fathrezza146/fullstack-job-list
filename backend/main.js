const express = require("express");
const config = require("./config")

async function startServer() {
  const app = express();

  const port = config.port;

  await require("./loaders")(app);

  app.listen(port, (err) => {
    if (err) {
      process.exit(1);
    }
    console.log(`Port opened at ${port}`);
  });
}

startServer();
