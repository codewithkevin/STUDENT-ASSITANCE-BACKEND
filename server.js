import express from "express";
import { config as dotenvConfig } from "dotenv";
import colors from "colors";
import errorHandler from "./middleware/Error/errorMiddleware.js";
import connectDB from "./config/db/index.js";

dotenvConfig();

const port = process.env.PORT;

//Initialize Express
const app = express();

// Load environment variables from the .env file

//MiddlewareStack
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);

//DATABASE CONNECTION
connectDB();

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`.yellow.bold)
);
