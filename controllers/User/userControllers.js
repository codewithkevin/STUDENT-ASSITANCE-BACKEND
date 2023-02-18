const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const User = require("../../models/UserModels/userModel.js");
const sendCode = require("../../services/Mail/sendCode.js");
const {
  generateConfirmationCode,
} = require("../../services/Others/generateCode.js");

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

const sendConfirmationCode = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const confirmationCode = generateConfirmationCode();

  // Store the confirmation code somewhere so it can be verified later.
  // For simplicity, this example stores it as a property of the user object.
  const user = { email, confirmationCode };

  sendCode.sendConfirmationCode(email, confirmationCode);

  res.status(200).json({ message: "Confirmation code sent." });
});

module.exports = { registerUser, sendConfirmationCode };
