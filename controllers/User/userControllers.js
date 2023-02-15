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
  const { name, email, password } = req.body;

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
  const user = await User.create({ name, email, password: hashedPasswords });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateJWT(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Details");
  }
});

module.exports = { registerUser };
