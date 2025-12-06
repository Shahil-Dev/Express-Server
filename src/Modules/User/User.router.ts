import { Request, Response, Router } from "express";
import { pool } from "../../Database/DB";
import { UserController } from "./User.Controller";
// import verify from "../../Middleware/Verify";

const router = Router();

router.post("/", UserController.createUSer)



export const UserRouter = router;