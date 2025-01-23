import express from "express"
import { createData } from "../controllers/userController.js"
import { verifyEmail } from "../emailVerify/emailVerifyController.js"
const route = express.Router()

route.post('/create', createData)
route.get('/verify/:token', verifyEmail);

export default route;