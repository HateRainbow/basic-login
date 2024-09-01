import mongoose from "mongoose";

export async function mongodbConnect() {
  try {
    await mongoose.connect("'mongodb://localhost:27017/userDB");
    console.log("Connected successful");
  } catch (error) {
    console.error("Error connecting to mongodb", error.message);
  }
}
