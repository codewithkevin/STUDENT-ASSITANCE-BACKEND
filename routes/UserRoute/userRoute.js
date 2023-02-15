const express = require("express");
const { registerUser } = require("../../controllers/User/userControllers.js");
const userRoute = express.Router();

//Register Say Hello
userRoute.post("/register", registerUser);

//Login User

//Get User Deatils Route

module.exports = userRoute;
