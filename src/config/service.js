// const SERVICE_PORT = 5678;
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  SERVICE_PORT: process.env.SERVER_PORT,
};
