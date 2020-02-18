import { hash, genSalt } from 'bcryptjs'
import { RequestHandler } from 'express'
import { User } from '../entity/User'

export const createUser: RequestHandler = async (req, res, next) => {  
  try {
    const username = (req.body as { username: string }).username
    const nickname = (req.body as { nickname: string }).nickname
    const password= (req.body as { password: string }).password    
    const hashedPassword = await hash(password, await genSalt())

    const newUser = User.create({ username, nickname, password: hashedPassword })
    
    if (!newUser) {
      throw new Error('Could not create a new user!')
    }

    await newUser.save()
    res.status(200).json(newUser.username)

  } catch (err) {
    next(err)
  }
}

export const getUsers: RequestHandler = async (req, res, next) => {
  try {

    const users = await User.find()

    if (!users) {
      throw new Error('Could not find any users!')
    }

    //Trim password out from users I am not sure how to do this with Typescript therefore ts-ignore
    // @ts-ignore
    const trimmedUsers = users.map(({ password, ...user }) => user)
    res.status(200).json(trimmedUsers)

  } catch (err) {
    next(err)
  }  
}

export const getUser: RequestHandler = async (req, res, next) => {
  try {
    const id: string = (req.params as { id: string }).id
    const user = await User.findOne({ id })

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