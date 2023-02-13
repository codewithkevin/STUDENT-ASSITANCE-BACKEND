import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const coon = mongoose.connect(process.env.MONG_URI);
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
