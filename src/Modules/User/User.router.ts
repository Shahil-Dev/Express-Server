import { Request, Response, Router } from "express";
import { pool } from "../../Database/DB";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
    const { name, email, password, age } = req.body;
    const result = await pool.query('INSERT INTO users (name, email, password, age) VALUES ($1, $2, $3, $4) RETURNING *', [name, email, password, age]);
    res.status(201).json({
        message: 'User created successfully',
        user: result.rows[0]
    })



})



export const UserRouter = router;