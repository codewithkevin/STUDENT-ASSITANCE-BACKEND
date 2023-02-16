const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    account: {
      type: String,
      required: [true, "Please add a account"],
    },
    workplace: {
      type: String,
      required: [true, "Please add a workplace"],
    },
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    date_of_birht: {
      type: String,
      required: [true, "Please add a date_of_birht"],
    },
    phone_number: {
      type: String,
      required: [true, "Please add a phone_number"],
    },
    country: {
      type: String,
      required: [true, "Please add a country"],
    },
    username: {
      type: String,
      unique: true,
    },
    age: {
      type: String,
      required: [true, "Please add a age"],
    },
    interests: {
      type: String,
      required: [true, "Please add a interests"],
    },
    email: {
      type: String,
      required: [true, "Please add a email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
  },
  { timeStamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
