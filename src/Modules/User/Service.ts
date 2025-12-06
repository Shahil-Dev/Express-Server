import { pool } from "../../Database/DB";
import bcrypt from "bcryptjs";

const createUserInToDB = async (payload: Record<string, unknown>) => {
       const { name, email, password, age } = payload

       const hashPassword = await bcrypt.hash(password as string, 10);

       const result = await pool.query('INSERT INTO users (name, email, password, age) VALUES ($1, $2, $3, $4) RETURNING *', [name, email, hashPassword, age]);



       if (result.rows[0]) {
              delete result.rows[0].password;
       }


       return result
}








export const userServices = {
       createUserInToDB
}
