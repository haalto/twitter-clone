import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { DB_URL } from './config'
import { User } from '../entity/User'
import { Tweet } from '../entity/Tweet'

export const connect = createConnection({
  type: "postgres",
  url: DB_URL,
  entities: [
    User,
    Tweet
  ],
  synchronize: true
})