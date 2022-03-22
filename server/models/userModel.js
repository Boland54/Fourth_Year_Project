const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      min: 6,
    },
    role: {
      type: String,
      required: [true, "Please enter your role (Admin/Client"],
      min: 6,
    },
  },
  { timestamp: true }
);


const User = model("User", userSchema);

module.exports = User;
