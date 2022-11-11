const axios = require("axios");

const controller = {
  getJobList: async (req, res) => {
    try {
      const {
        description = "",
        location = "",
        full_time = "true",
        page = 1,
      } = req.query;

      if (full_time != "true" && full_time != "false") {
        throw new Error("full_time must be boolean");
      }

      const getPositions = await axios
        .get(
          `http://dev3.dansmultipro.co.id/api/recruitment/positions.json?description=${description}&location=${location}&full_time=${full_time}&page=${page}`
        )
        .catch((error) => {
          throw new Error(`Error get data: ${error}`);
        });

      const data = getPositions.data;
      return res.json({
        status: "success",
        data,
      });
    } catch (error) {
      return res.status(400).json({ status: "failed", message: error.message });
    }
  },
  getJobDetail: async (req, res) => {
    try {
      const id = req.params.id;

      const getPositions = await axios
        .get(`http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`)
        .catch((error) => {
          throw new Error(`Error get data: ${error}`);
        });

      const data = getPositions.data;
      return res.json({
        status: "success",
        data,
      });
    } catch (error) {
      return res.status(400).json({ status: "failed", message: error.message });
    }
  },
};

module.exports = controller;
