import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("DB Connected Successfully...");
  } catch (error) {
    console.log("Error connecting To Database");
    console.log(error);
  }
};

export default connectDB;
