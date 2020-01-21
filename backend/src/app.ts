import { PORT, DB_URL } from './utils/config'
import express, { Request, Response, NextFunction } from 'express'
import { json } from 'body-parser'
import { Sequelize } from 'sequelize'
import tweetRouter from './routes/tweets'

const db = new Sequelize(DB_URL)
db.authenticate()
  .then(() => console.log('Connected to the database!'))
  .catch((error: any) => console.log(`Error when connecting to the database: ${error}`))

const app = express()
app.use(json())

app.use('/api/tweets', tweetRouter)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message })
})

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})