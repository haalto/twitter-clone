import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import { JWT_SECRET } from './config'
 
export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {

  console.log(error.message)

  if (error.name === 'CastError') {
      return res.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
      return res.status(400).json({ error: error.message })
  } else {
    return res.status(500).json({ message: `Oops! Something went wrong :(`})
  }
}

export const unknownEndpoint = (req: Request, res: Response) => {
  res.status(404).send({ error: 'unknown endpoint' })
}

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  const token = <string>req.get('Authorization')?.split(' ')[1]
  let decodedToken  
  try {
    decodedToken = verify(token, JWT_SECRET)
  } catch (err) {
    next(err)
  }

  if (!decodedToken) {
    throw new Error('Token is not valid!')
  }

  res.locals.decodedToken = decodedToken
  next()
}