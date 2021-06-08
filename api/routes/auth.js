import express from "express";

import userController from "../model/user";

const authRouter = express.Router();

authRouter.get("/", userController);

export default authRouter;