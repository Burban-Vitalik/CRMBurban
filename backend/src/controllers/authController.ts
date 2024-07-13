const User = require("../models/user");
import { hashPassword, comparePassword } from "../helpers/auth";
import userProfile from "../models/userProfile";
const jwt = require("jsonwebtoken");

const registerUser = async (req: any, res: any) => {
  try {
    const { name, email, password } = req.body;

    // check if name was entered
    if (!name) {
      return res.json({
        error: "name is empty",
      });
    }

    // check is password was entered
    if (!password || password.length < 6) {
      return res.json({
        error: "password is empty or length is less than 6",
      });
    }

    // check is email was entered correctly
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email is taken already",
      });
    }

    const hashedPassword = await hashPassword(password);

    // Create the user in the User collection
    const user = await User.create({ name, email, password: hashedPassword });

    // Create user profile in userProfiles collection
    await userProfile.create({ userId: user._id });

    return res.json(user);
  } catch (error) {
    console.error("error", error);
  }
};

const loginUser = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;

    // check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        error: "No user found",
      });
    }

    // check is password match
    const match = await comparePassword(password, user.password);
    if (match) {
      jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        process.env.JWT_SECRET,
        {},
        (err: any, token: any) => {
          if (err) throw err;
          res.cookie("token", token).json(user);
        }
      );
    }
    if (!match) {
      res.json({
        error: "Password doesnt match",
      });
    }

    console.log("Received password:", password);
    console.log("User password hash:", user.password);
    console.log("Password match:", match);
  } catch (error) {
    console.error(error);
  }
};

const logoutUser = async (req: any, res: any) => {
  try {
    res.clearCookie("token").json({ message: "Logged out successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getProfile = (req: any, res: any) => {
  const { token } = req.cookies;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err: any, user: any) => {
      if (err) throw err;
      console.log("return profile", res.json(user));

      res.json(user);
    });
  } else {
    res.json(null);
  }
};

module.exports = {
  registerUser,
  loginUser,
  getProfile,
  logoutUser,
};
