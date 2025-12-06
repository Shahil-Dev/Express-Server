import { Request, Response, Router } from "express";
import { AuthController } from "./Auth.controller";


const router = Router();

router.post("/login",AuthController.loginUser)



export const AuthRouter = router;