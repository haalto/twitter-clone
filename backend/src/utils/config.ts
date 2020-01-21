import dotenv from 'dotenv'
dotenv.config()

export var PORT: string | number = process.env.PORT || 3001
export var DB_URL: string = String(process.env.DB_URL)