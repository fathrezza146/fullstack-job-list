"use strict";

const jobsController = require('./jobs.controller');
const loginController = require('./login.controller');

const controller = {
  jobsController,
  loginController,
}

module.exports = controller;
