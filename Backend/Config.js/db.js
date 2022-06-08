const mongoose = require("mongoose");
const color = require("colors");
const dbConnection = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `DataBase connected successfully :${connect.connection.host} `.underline
        .cyan
    );
  } catch (error) {
    console.log(`Error :${error.message}`.underline.red);
    process.exit();
  }
};
module.exports = dbConnection;
