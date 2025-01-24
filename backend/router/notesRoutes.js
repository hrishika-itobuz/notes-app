import express from "express"
import { createData } from "../controllers/userController.js"
import { verifyEmail } from "../emailVerify/emailVerifyController.js"
import {login} from "../controllers/loginUser.js"
const route = express.Router()

route.post('/create', createData)
route.get('/verify/:token', verifyEmail);
route.post('/login/:email', login)

export default route;