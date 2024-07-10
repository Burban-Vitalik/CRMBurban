import express from "express";
import cors from "cors";
const {
  registerUser,
  loginUser,
  getProfile,
  logoutUser,
} = require("../controllers/authController");

const router = express.Router();

// middleware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getProfile);
router.get("/logout", logoutUser);

module.exports = router;
