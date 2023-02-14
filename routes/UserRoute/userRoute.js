import express from "express";

const userRoute = express.Router();

//Register Say Hello
userRoute.get("/register", (req, res) => {
    res.send("Hello");
    console.log("Hello");
  });
  
export default userRoute;
