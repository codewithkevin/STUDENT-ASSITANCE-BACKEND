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
    dateOfBirth: {
      type: Date,
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
      required: [true, "Please add a username"],
      unique: true,
    },
    age: {
      type: String,
      required: [true, "Please add a age"],
    },
    interests: {
      type: Array,
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
      select: false, // Exclude password from output
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
