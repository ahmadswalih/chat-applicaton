const express = require("express");
const dotenv = require("dotenv");
const dbConnection = require("./Config.js/db");
const app = express();
dotenv.config();
dbConnection();
const port = 5000;

app.listen(port, () => {
  console.log(`Server is up and running at ${port}`);
});
