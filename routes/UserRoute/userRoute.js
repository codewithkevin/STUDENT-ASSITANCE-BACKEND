const express = require("express");
const {
  registerUser,
  sendConfirmationCode,
} = require("../../controllers/User/userControllers.js");
const userRoute = express.Router();

//Register User
userRoute.post("/register", registerUser);

//Login User

//Get User Deatils Route

//SendCode
userRoute.post("/sendCode", sendConfirmationCode);

module.exports = userRoute;
