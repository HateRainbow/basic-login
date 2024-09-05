import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
});

// const userFind = async (username, email, password) => {
//   await mongoose.Schema;
// };

const userModel = mongoose.model("user", userSchema);

export default userModel;
