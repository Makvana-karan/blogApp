const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connect".bgMagenta);
  } catch (error) {
    console.log(error + colors.bgRed);
  }
};

module.exports = connectDB;
