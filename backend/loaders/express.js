const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("../routes");

module.exports = async (app) => {
  app.enable("trust proxy");
  app.use(cors());
  app.use(bodyParser.json());
  app.use(routes());

  app.use((req, res, next) => {
    const err = new Error("Not Found");
    err["status"] = 404;
    next(err);
  });

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });
};
