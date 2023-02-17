const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    account: {
      type: String,
    },
    workplace: {
      type: String,
    },
    name: {
      type: String,
    },
    date_of_birht: {
      type: String,
    },
    phone_number: {
      type: String,
    },
    country: {
      type: String,
    },
    username: {
      type: String,
      unique: true,
    },
    age: {
      type: String,
    },
    interests: {
      type: Array,
    },
    email: {
      type: String,
      required: [true, "Please add a email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      select: false, // Exclude password from output
    },
  },
  { timestamps: true }
);


const User = mongoose.model("User", userSchema);

module.exports = User;
