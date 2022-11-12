const bcrypt = require("bcrypt");
const models = require("../models");
const jwt = require("jsonwebtoken");
const config = require("../config");

const saltRounds = 10;

const controller = {
  login: async (req, res) => {
    try {
      const { username = "", password = "" } = req.body;

      const user = await models.login([username]);
      if (!user) {
        throw new Error("Data User Tidak Ditemukan");
      }

      if (!bcrypt.compareSync(password, user.password)) {
        throw new Error("Password Salah");
      }

      const token = jwt.sign(user, config.auth.secret, { expiresIn: "1d" });
      return res.json({
        status: "success",
        token,
        type: "Bearer"
      });
    } catch (error) {
      return res.status(400).json({ status: "failed", message: error.message });
    }
  },
  test: async(req,res) => {
    try {
      return res.json({
        status: "success",
      });
    } catch (error) {
      return res.status(400).json({ status: "failed", message: error.message });
    }
  }
};

module.exports = controller;
