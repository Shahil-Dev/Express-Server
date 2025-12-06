import { Request, Response } from "express";
import { AuthServices } from "./Auth.servise";

const loginUser = async (req: Request, res: Response) => {

    try {
        const result = await AuthServices.LoginWihEmailAndPassword(req.body.email, req.body.password);
        res.status(201).json({
            message: 'User created successfully',
            user: result.rows[0]
        })
    } catch (error) {
        console.error('Error creating user:', error);
    }


}


export const AuthController = {
    loginUser
}