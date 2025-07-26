import jwt from "jsonwebtoken";
import { User } from "../models/user.models.js";

const verifyUser = async (req, res, next) => {
  try {
    const token = req.cookies?.token || "";

    if (!token) {
      return res.status(400).json({
        message: "User not logged in!",
        success: false,
      });
    }

    // decode information from token
    const decodedToken = jwt.verify(token, process.env.TOKEN);

    const email = decodedToken.email;

    if (!email) {
      throw new Error("Unauthorized access!");
    }

    // storing userId for accessing user details
    const user = await User.findOne({ email }).select("-password");
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    req.user = user;
    return next();
    } catch (error) {
    return res.status(500).json({
      message: "Unable to verify user(BACKEND ISSUE)",
      success: false,
    });
  }
};

export default verifyUser;
