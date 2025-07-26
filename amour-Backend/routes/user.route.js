import { loginUser, logoutUser, registerUser } from "../Controllers/user.controller.js";
import verifyUser from "../middleware/verifyUser.js";
import {Router} from 'express'

const userRouter = Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/logout',verifyUser, logoutUser)

export default userRouter

