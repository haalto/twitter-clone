import { RequestHandler } from 'express'
import { User } from '../models/User'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { JWT_SECRET } from '../utils/config'

export const checkLoginCredentials: RequestHandler = async (req, res, next) => {
  try {
    const username = (req.body as { username: string }).username
    const password = (req.body as { username: string }).username

    if (!(username && password)) {
      throw new Error('Username or password is missing!')
    }

    const user: User = await User.findOne({ where: { username }})

    if (!user) {
      throw new Error('Username or password is wrong!')
    } 

    const result: boolean = await compare(password, user.password)

    if (!result) {
      throw new Error('Username or password is wrong!')
    }

    const token = sign(
      { userId: user.id },
      JWT_SECRET
    )

    res.json({ token })

  } catch (err) {
    next(err)
  }
}