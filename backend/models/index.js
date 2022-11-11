"use strict";

const Container = require("typedi").Container;

let model = {
  login: async function (data_bind) {
    const conn = Container.get("mysqlpool");
    try {
      let q = `select id, username, password from account where username = ?`;

      const [rows] = await conn.query(q, data_bind);

      return rows.length > 0 ? rows[0] : null;
    } catch (err) {
      throw new Error(err);
    }
  },
};

module.exports = model;
