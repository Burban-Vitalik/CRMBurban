// У backend/index.ts
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

const cookieParser = require("cookie-parser");

const {
  registerUser,
  loginUser,
  getProfile,
} = require("./controllers/authController");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// Database connection
mongoose
  .connect(process.env.MONGO_URL as string)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error", err));

app.use("/", require("./routes/authRoutes"));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
