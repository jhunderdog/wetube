import express from "express";
import routes from "../routes";
import { editProfile, changePassword } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => res.send('users'))
userRouter.get(routes.editProfile, editProfile)
userRouter.get(routes.changePassword, changePassword)
userRouter.get(routes.userDetail, (req, res) => res.send('userDetail'))

export default userRouter;