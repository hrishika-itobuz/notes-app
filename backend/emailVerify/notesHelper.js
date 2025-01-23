// import nodemailer from "nodemailer"
// import jwt from "jsonwebtoken"
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: "hrishika@itobuz.com",
//         pass: "hgsc kbql fxdz glqk"
//     }
// });

// const token = jwt.sign({
//         data: 'Token Data'  
//     }, 'ourSecretKey', { expiresIn: '10m' }  
// );  




// userSchema.pre(save, function(next) {
//     var user = this;

// // only hash the password if it has been modified (or is new)
// if (!user.isModified('password')) return next();

// // generate a salt
// bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
//     if (err) return next(err);

//     // hash the password using our new salt
//     bcrypt.hash(user.password, salt, function(err, hash) {
//         if (err) return next(err);

//         // override the cleartext password with the hashed one
//         user.password = hash;
//         next();
//     });
// });


// });

// userSchema.methods.comparePassword = function(password, cb) {
//     bcrypt.compare(password, this.password, function(err, isMatch) {
//         if (err) return cb(err);
//         cb(null, isMatch);
//     });
// };



// import bcrypt from "bcryptjs";
// const passwordMatch = await bcrypt.compare(password, result.password);