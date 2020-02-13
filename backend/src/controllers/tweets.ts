import { RequestHandler, Request } from 'express'
import { Tweet } from '../models/Tweet'
import { User } from '../models/User'

export const createTweet: RequestHandler = async (req, res, next) => {
  
  const jwtPayload = res.locals.decodedToken
  const userId = jwtPayload.userId

  try {
    const content = (req.body as { content: string}).content
    const user: User = User.findOne<User>({where: { id: userId }})
    const newTweet: Tweet = await Tweet.create({ content, userId})
    //const tweet: Tweet = await Tweet.create({ content, userId })
    //const newTweet: Tweet = await user.createTweet()
    res.status(200).json(newTweet.toJSON())

  } catch (err) {
    next(err)
  } 
}

export const getTweets: RequestHandler = async (req, res, next) => {
  
  try {
    const tweets: Tweet[] = await Tweet.findAll()
    
    if (!tweets) {
      throw new Error('Could not find any tweets')
    }

    res.status(200).json(tweets)
    
  } catch (err) {
    next(err)
  }
}

export const getTweet: RequestHandler = async (req, res, next) => {
  
  try {
    const id: number = parseInt(req.params.id)
    const tweet: Tweet = await Tweet.findOne({ where: { id } })
    
    if (!tweet) {
      throw new Error('Tweet does not exist')    
    } else {
      res.status(200).json(tweet)
    }

  } catch (err) {
    next(err)
  }
}

export const deleteTweet: RequestHandler = async (req, res, next) => {
  try {
    const id: number = parseInt(req.params.id)
    const result: number = await Tweet.destroy({ where: { id } })
    res.status(200)

  } catch (err) {
    next(err)
  }
}