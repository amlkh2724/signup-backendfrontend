import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import signupLoginRoute from "./routes/signupLoginRoute.js";
import colors from "colors";

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

// 👇️ configure CORS
app.use(cors());

app.use(express.json());

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.send("you need to build your product!");
});

app.use("/users", signupLoginRoute);
// app.use("/users/login", login)
const PORT = process.env.PORT || 5000;
console.log("the port is:", PORT);

const server = app.listen(
  PORT,
  console.log(`the server is running on port ${PORT}`.yellow.bold)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  server.close(() => process.exit(1));
});
