import { pool } from "../../Database/DB"
import bcrypt from 'bcryptjs';

const LoginWihEmailAndPassword = async (email: string, password: string) => {
    const user = await pool.query(`
            SELECT * FROM users WHERE email = $1 
            `, [email])
    const matchPassword = await bcrypt.compare(password, user.rows[0].password)
    if (!matchPassword) {
        throw new Error('Invalid password')
    }

    return user
}


export const AuthServices = {
    LoginWihEmailAndPassword
}