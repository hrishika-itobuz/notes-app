
import jwt from "jsonwebtoken";
import userSchema from "../models/userSchema.js";

export const verifyEmail = async (req, res) => {
  try {
    const { token } = req.params;

    jwt.verify(token, 'ourSecretKey', async (err, decoded) => {
      if (err) {
        res.status(404).json({
          message:
            "Email verification failed",
          success: false,
        });
      } else {
        const result = await userSchema.findOne({token :`${token}`});
        if (result) {
          result.isVerified = true;
          result.token = "";
          await result.save();

          res.json({
            status: 200,
            message: `Email verified successfully`,
            success: true,
          });
        }
      }
    });
  } catch (err) {
    res.status(404).json({
      message: "Email not verified",
      success: false,
    });
  }
};