"use strict";

const jwt = require("jsonwebtoken");
const config = require("../config");

let library = {
  auth: async (req, res, next) => {
    try {
      let auth = (req.headers.authorization || "").replace("Bearer ", "");
      const userTokenInfo = jwt.verify(auth, config.auth.secret);
      if (!userTokenInfo) throw new Error();
      if (typeof userTokenInfo == "string") throw new Error();
      const manipulatedInfo = {
        ...userTokenInfo,
        id: userTokenInfo.id,
        email: userTokenInfo.email,
        supplier_id: userTokenInfo.supplier_id,
      };

      req.user = manipulatedInfo;

      next();
    } catch (error) {
      return res
        .status(403)
        .json({ status: "failed", message: "Unauthorized" });
    }
  },
};

module.exports = library;
