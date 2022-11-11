const dotenv = require("dotenv");

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();
if (!envFound) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

const config = {
  port: parseInt(process.env.PORT, 10),
  dbConfig: {
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
    connectionLimit: process.env.DBLIMIT,
  },
  auth: {
    jwt_key: process.env.JWT_KEY,
    secret: process.env.SECRET,
  },
};

module.exports = config;
