const mongoose = require("mongoose");

const connectDB = async () => {
  let loading = true;
  try {
    mongoose.set("strictQuery", false);
    const coon = await mongoose.connect(process.env.MONG_URI);
    console.log("Connected to DB");
    loading = false;
  } catch (error) {
    console.log(error);
    process.exit(1);
    loading = true;
  }
};

module.exports = connectDB;
