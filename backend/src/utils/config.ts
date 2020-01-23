import dotenv from 'dotenv'
dotenv.config()

export const PORT: string | number = process.env.PORT || 3001
export const DB_URL: string = String(process.env.DB_URL)
export const JWT_SECRET: string = String(process.env.JWT_SECRET)