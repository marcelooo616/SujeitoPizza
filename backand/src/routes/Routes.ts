import { Router } from "express";

import { CreateUserController } from "../controllers/user/CreateUserController";

const router = Router();

//-- RTAS USER --
router.post('/users', new CreateUserController().handle)

export { router };