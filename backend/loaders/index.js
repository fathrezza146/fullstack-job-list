const expressLoader = require("./express");
const config = require("../config");
const mysql = require("mysql2");
const Container = require("typedi").Container;

module.exports = async (expressApp) => {
  const pool = mysql.createPool(config.dbConfig);
  const con = pool.promise();
  Container.set("mysqlpool", con);

  await expressLoader(expressApp);
};
