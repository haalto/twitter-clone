import { hash, genSalt } from 'bcryptjs'
import { RequestHandler } from 'express'
import { User } from '../entity/User'
import { v1 } from 'uuid'
import { Tweet } from '../entity/Tweet'
import { connect } from '../utils/connection'

export const createUser: RequestHandler = async (req, res, next) => {
  try {

    const db = await connect
    const id: string = v1()
    const username = (req.body as { username: string }).username
    const nickname = (req.body as { nickname: string }).nickname
    const password= (req.body as { password: string }).password    
    const hashedPassword: string = await hash(password, await genSalt())

    const newUser = await db.manager.create(User, { id, username, nickname, password: hashedPassword })
    //const newUser: User = await User.create({ id, username, nickname, password: hashedPassword })
    
    if (!newUser) {
      throw new Error('Could not create a new user!')
    }

    db.manager.save(User, newUser)
    console.log('new user created')
    res.status(200).json(newUser.username)

  } catch (err) {
    next(err)
  }
}

export const getUsers: RequestHandler = async (req, res, next) => {
  try {
    const db = await connect
    const users: User[] = await db.manager.getRepository(User).find()

    if (!users) {
      throw new Error('Could not find any users!')
    }

    //Idea is to trim out the hashed password from user objects. This seems pretty hacky but it works.
    //interface trimmedUser { password: string }
    //const trimmedUsers = users.map(user => <trimmedUser>user.get()).map(({ password, ...user }) => user)

    //res.status(200).json(trimmedUsers)
    console.log(users)
    res.status(200).json(users)

  } catch (err) {
    next(err)
  }  
}

export const getUser: RequestHandler = async (req, res, next) => {
  try {
    const db = await connect
    const id: string = (req.params as { id: string }).id
    /*const user: User = await User.findByPk(id, {
      include: [User.associations.tweets]
    })*/

    const user: User | undefined = await db.manager.findOne(User, id)

    if (!user) {
      throw new Error('Could not find user!')
    }

    delete user.password    
    res.status(200).json(user)

  } catch (err) {
    next(err)
  }  
}

export const updateUser: RequestHandler = async (req, res, next) => {
  try {

  } catch (err) {
    
  }  
}

/*
export const deleteUser: RequestHandler = async (req, res, next) => {
  try {
    const id: string = (req.params as { id: string }).id
    const result = User.destroy({ where: { id } })
    res.status(200).json(result)

  } catch (err) {
    next(err)
  }  
}
*/