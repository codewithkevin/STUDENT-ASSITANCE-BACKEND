const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const User = require("../../models/UserModels/userModel.js");

const generateJWT = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const registerUser = asyncHandler(async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      interests,
      age,
      username,
      country,
      phone_number,
      workplace,
      dateOfBirth,
      account,
    } = req.body;

    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please add all Fields");
    }

    // Check if the user is already registered
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("User already registered");
    }

    // Hash The Passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPasswords = await bcrypt.hash(password, salt);

    // Create a new User
    const user = await User.create({
      name,
      email,
      interests,
      age,
      username,
      country,
      phone_number,
      dateOfBirth,
      workplace,
      account,
      password: hashedPasswords,
    });

    res.status(201).json({
      user,
      token: generateJWT(user._id),
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
});

module.exports = { registerUser };
