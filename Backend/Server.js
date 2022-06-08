const express = require("express");
const dotenv = require("dotenv");
const dbConnection = require("./Config.js/db");
const userRoutes = require("./Routes/userRoutes");
const color = require("colors");
const app = express();
dotenv.config();
dbConnection();

const port = 5000;

app.use(express.json()); //To Accept Json Data
app.use("/api/user", userRoutes);
app.listen(port, () => {
  console.log(`Server is up and running at ${port}`.yellow);
});
