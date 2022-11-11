const express = require("express");

async function startServer() {
  const app = express();

  const port = 8080;

  await require("./loaders")(app);

  app.listen(port, (err) => {
    if (err) {
      process.exit(1);
    }
    console.log(`Port opened at ${port}`);
  });
}

startServer();
