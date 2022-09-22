const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(process.env.MONGO_DB_CONNECTION).then(() => {
    console.log("Database connect");
  });
};

module.exports = connectDatabase;
