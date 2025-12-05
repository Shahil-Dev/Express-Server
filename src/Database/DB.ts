import { Pool } from 'pg'

export const pool = new Pool({
    connectionString: `postgresql://neondb_owner:npg_EABaC4W6fzxd@ep-gentle-band-a8m2u1qh-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require`
})




export const initDB = async () => {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(50) UNIQUE NOT NULL,
        password TEXT,
        age INT ,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW())
        
        `)
    console.log("Database Connected!!!")
}