import { Request, Response, NextFunction } from 'express'

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {

  console.log(error.message)

  if (error.name === 'CastError') {
      return res.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
      return res.status(400).json({ error: error.message })
  } else {
    return res.status(400).json({ error })
  }
}

export const unknownEndpoint = (req: Request, res: Response) => {
  res.status(404).send({ error: 'unknown endpoint' })
}