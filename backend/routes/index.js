"use strict";

const express = require("express");
const app = express();
const Router = require("express-group-router");
let router = new Router();
const middleware = require("../helpers/middleware.helpers");
const controllers = require("../controller");

module.exports = function () {
  router.get("",  controllers.loginController.test)
  router.post("/login", controllers.loginController.login);
  router.get("/list", middleware.auth, controllers.jobsController.getJobList);
  router.get(
    "/detail/:id",
    middleware.auth,
    controllers.jobsController.getJobDetail
  );
  let listRoutes = router.init();
  app.use(listRoutes);
  return app;
};
