const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose
      .connect(process.env.MONGO_URI)
      .then(() => console.log("Mongo connected"));
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

module.exports = connectDB;
