import { PORT } from './utils/config'
import express from 'express'
import { json } from 'body-parser'
import cors from 'cors'
import tweetRouter from './routes/tweets'
import userRouter from './routes/users'
import loginRouter from './routes/login'
import { unknownEndpoint, errorHandler } from './utils/middleware'

const app = express()

app.use(cors())
app.use(json())
app.use('/api/login', loginRouter)
app.use('/api/tweets', tweetRouter)
app.use('/api/users', userRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})

app.use(unknownEndpoint)
app.use(errorHandler)