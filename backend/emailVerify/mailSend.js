import nodemailer from 'nodemailer'
export const sendMail= async (email,token) => {
    const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "hrishika@itobuz.com",
        pass: "hgsc kbql fxdz glqk"
    }
});
const mailConfigurations = {

    from: 'hrishika@itobuz.com',

    to: `${email}`,

    subject: 'Email Verification',

    text: `Hi! There, You have recently visited 
               our website and entered your email.
               Please follow the given link to verify your email
               http://localhost:8004/note/verify/${token} 
               Thanks`
};

transporter.sendMail(mailConfigurations, function (error, info) {
    if (error) throw Error(error);
    console.log('Email Sent Successfully');
    console.log(info);
});
}