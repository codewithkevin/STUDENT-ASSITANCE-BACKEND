import express from "express";

const userRoute = express.Router();

//Register Say Hello
userRoute.post("/register", (req, res) => {
  res.send("Hello");
  console.log("Hello");
});

//Login User

//Get User Deatils Route

export default userRoute;
