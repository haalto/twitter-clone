import { PORT } from './utils/config'
import express from 'express'
import { json } from 'body-parser'
import cors from 'cors'
import tweetRouter from './routes/tweets'
import userRouter from './routes/users'
import loginRouter from './routes/login'
import { unknownEndpoint, errorHandler } from './utils/middleware'
import { connect } from './utils/db'
import { Tweet } from './entity/Tweet'
import { User } from './entity/User'

const app = express()

connect
  .then(async (connection) => {
    console.log('Connected to the database!')
    
    //Clear tweets from db when restarting
    //await connection.manager.delete(Tweet, {})

    //Clear users from db when restarting
    //await connection.manager.delete(User, {})
    
  })
  .catch(err => {
    console.log(`Could not connect to the db: ${err}`)
  })

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