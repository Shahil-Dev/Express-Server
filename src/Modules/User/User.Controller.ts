import { Request, Response } from "express";
// import { pool } from "../../Database/DB";
import { userServices } from "./Service";

const createUSer = async (req: Request, res: Response) => {
    try {
        const result = await userServices.createUserInToDB(req.body);
        res.status(201).json({
            message: 'User created successfully',
            user: result.rows[0]
        })
    } catch (error) {
        console.error('Error creating user:', error);
    }



}


export const UserController = {
    createUSer
} 