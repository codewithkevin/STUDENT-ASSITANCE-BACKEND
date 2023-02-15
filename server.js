const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const errorHandler = require("./middleware/Error/errorMiddleware.js");
const connectDB = require("./config/db/index.js");
const userRoute = require("./routes/UserRoute/userRoute.js");

dotenv.config();

var port = process.env.PORT;

//Initialize Express
var app = express();

//MiddlewareStack
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  console.log(req.path, req.method);
  next();
});
app.use(errorHandler);

//Use ROutes
app.use("/api/users", userRoute);

//DATABASE CONNECTION
connectDB();

app.listen(port, function () {
  console.log("Server is running at http://localhost:" + port);
});
