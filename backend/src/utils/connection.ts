import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { DB_URL } from './config'
import { User } from '../entity/User'
import { Tweet } from '../entity/Tweet'

/*
const connectionOptions = PostgressConnectionStringParser.parse(DB_URL)

const typeOrmOptions= {
  type: "postgres",
  name: connectionOptions.application_name,
  host: connectionOptions.host,
  port: connectionOptions.port,
  username: connectionOptions.user,
  password: connectionOptions.password,
  database: connectionOptions.database,
  synchronize: true,
  entities: [],
  logging: false
}
*/
export const connect = createConnection({
  type: "postgres",
  url: DB_URL,
  entities: [
    User,
    Tweet
  ],
  synchronize: true
})

/*
export const connection = async () => {
  return await createConnection({
    type: 'postgres',
    url: DB_URL,
    entities: [],
    synchronize: true,
  })
}
*/