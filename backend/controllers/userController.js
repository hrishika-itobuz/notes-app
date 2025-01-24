import bcrypt from "bcrypt"
import userSchema from "../models/userSchema.js";
import jwt from 'jsonwebtoken'
// import nodemailer from 'nodemailer'
import { sendMail } from "../emailVerify/mailSend.js";

export const createData = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const token = jwt.sign({
            data: 'Token Data'
        }, 'ourSecretKey', { expiresIn: '10m' }
        );
        const userData = await userSchema.create({ username, email,password:bcrypt.hashSync(password,10)  , token });
        if (userData) {
            res.json({
                success: true,
                message: "Token generated Successful",
                data: userData
            })
        }
        // const transporter = nodemailer.createTransport({
        //     service: 'gmail',
        //     auth: {
        //         user: "hrishika@itobuz.com",
        //         pass: "hgsc kbql fxdz glqk"
        //     }
        // });
        // const mailConfigurations = {

        //     from: 'hrishika@itobuz.com',

        //     to: "hrishika@itobuz.com",

        //     subject: 'Email Verification',

        //     text: `Hi! There, You have recently visited 
        //                our website and entered your email.
        //                Please follow the given link to verify your email
        //                http://localhost:8004/note/verify/${token} 
        //                Thanks`
        // };

        // transporter.sendMail(mailConfigurations, function (error, info) {
        //     if (error) throw Error(error);
        //     console.log('Email Sent Successfully');
        //     console.log(info);
        // });
        sendMail(email,token)

    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: "Data not created"
        })
    }
}


export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const result = await userSchema.findOne({ email: `${email}` });
      console.log(result)
      if (!result) {
        res.json({
          status: 404,
          message: "Invalid credentials",
          success: false,
        });
      } else {
        const passwordMatch = await bcrypt.compare(password, result.password);
        console.log(passwordMatch)
        if (!passwordMatch) {
          res.json({
            status: 404,
            message: "Wrong Password",
            success: false,
          });
        } else {
          res.json({
            status: 200,
            message: "Successfully login user",
            success: true,
          });
        }
      }
    } catch (error) {
      res.json({
        status: 500,
        message: "Internal server error",
        success: false,
      });
    }
  };

