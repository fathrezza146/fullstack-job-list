const { HttpStatusCode } = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("../routes");

module.exports = async (app) => {
  app.enable("trust proxy");
  app.use(cors({
    allowedHeaders:['Origin, X-Requested-With, Content-Type, Accept'],
    credentials:true,
    origin:true,
    methods: 'GET,HEAD,POST',
  }));
  app.options('*', cors())
  app.use(bodyParser.json());
  app.use(routes());

  app.use((req, res, next) => {
    const err = new Error("Not Found");
    err["status"] = 404;
    next(err);
  });

  app.use((err, req, res, next) => {
    if (err.status === HttpStatusCode.Unauthorized) {
      return res
        .status(err.status)
        .send({
          message: err.message
        })
        .end();
    }
    return next(err);
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
