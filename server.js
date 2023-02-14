import express from "express";
import { config as dotenvConfig } from "dotenv";
import colors from "colors";
import errorHandler from "./middleware/Error/errorMiddleware.js";
import connectDB from "./config/db/index.js";
import userRoute from "./routes/UserRoute/userRoute.js";

dotenvConfig();

const port = process.env.PORT;

//Initialize Express
const app = express();

//MiddlewareStack
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use(errorHandler);

//Use ROutes
app.use("/api/users", userRoute);

//DATABASE CONNECTION
connectDB();

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`.blue.bold)
);
