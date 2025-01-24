import express from "express"
import { createData } from "../controllers/userController.js"
import { verifyEmail } from "../middleware/tokenVerify.js"
import {login} from "../controllers/userController.js"
const route = express.Router()

route.post('/create', createData)
route.get('/verify/:token', verifyEmail);
route.post('/login', login)

export default route;