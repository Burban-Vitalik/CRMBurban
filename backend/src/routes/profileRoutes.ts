import express from "express";
const { updateProfile } = require("../controllers/profileController");

const router = express.Router();

router.put("/profile/edit", updateProfile);

module.exports = router;
