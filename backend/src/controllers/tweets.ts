import { RequestHandler, Request } from 'express'
import { Tweet } from '../entity/Tweet'
import { User } from '../entity/User'
import { connect } from '../utils/connection'

export const createTweet: RequestHandler = async (req, res, next) => {
  try {
    const db = await connect

    const jwtPayload = res.locals.decodedToken
    const userId = jwtPayload.userId
    const content = (req.body as { content: string}).content


    const user: User | undefined = await db.manager.findOne(User, userId)
    const newTweet = await db.manager.create(Tweet, {content, userId})
    //const user: User = User.findOne<User>({where: { id: userId }})
    //const newTweet: Tweet = await Tweet.create({ content, userId})
    //const tweet: Tweet = await Tweet.create({ content, userId })
    //const newTweet: Tweet = await user.createTweet()
    res.status(200).json(newTweet)

  } catch (err) {
    next(err)
  } 
}

export const getTweets: RequestHandler = async (req, res, next) => {
  
  try {
    const db = await connect
    const tweets: Tweet[] = await db.manager.find(Tweet)
    
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
    const db = await connect
    const id: number = parseInt(req.params.id)
    const tweet: Tweet | undefined = await db.manager.findOne(Tweet, id)
    //const tweet: Tweet = await Tweet.findOne({ where: { id } })
    
    if (!tweet) {
      throw new Error('Tweet does not exist')    
    } else {
      res.status(200).json(tweet)
    }

  } catch (err) {
    next(err)
  }
}

/*
export const deleteTweet: RequestHandler = async (req, res, next) => {
  try {
    const id: number = parseInt(req.params.id)
    const result: number = await Tweet.destroy({ where: { id } })
    res.status(200)

  } catch (err) {
    next(err)
  }
}
*/