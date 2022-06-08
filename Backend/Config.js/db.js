const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`DB connected successfully :${connect.connection.host} `);
  } catch (error) {
    console.log(`Error :${error.message}`);
    process.exit();
  }
};
module.exports = dbConnection;
