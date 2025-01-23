
import userSchema from "../models/userSchema.js";
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'

export const createData = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const token = jwt.sign({
            data: 'Token Data'
        }, 'ourSecretKey', { expiresIn: '10m' }
        );
        const userData = await userSchema.create({ username, email, password, token });
        if (userData) {
            res.json({
                success: true,
                message: "Token generated Successful",
                data: userData
            })
        }
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "hrishika@itobuz.com",
                pass: "hgsc kbql fxdz glqk"
            }
        });
        const mailConfigurations = {

            from: 'hrishika@itobuz.com',

            to: "hrishika@itobuz.com",

            subject: 'Email Verification',

            text: `Hi! There, You have recently visited 
                       our website and entered your email.
                       Please follow the given link to verify your email
                       http://localhost:8004/verify/${token} 
                       Thanks`
        };

        transporter.sendMail(mailConfigurations, function (error, info) {
            if (error) throw Error(error);
            console.log('Email Sent Successfully');
            console.log(info);
        });

    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: "Data not created"
        })
    }
}

