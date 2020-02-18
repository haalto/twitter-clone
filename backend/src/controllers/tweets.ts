import { RequestHandler, Request } from 'express'
import { Tweet } from '../entity/Tweet'
import { User } from '../entity/User'

export const createTweet: RequestHandler = async (req, res, next) => {
  try {
    const jwtPayload = res.locals.decodedToken
    const userId = jwtPayload.userId
    const content = (req.body as { content: string}).content

    const user = await User.findOne({ id: userId})
    const newTweet = Tweet.create({ content, user })
    await newTweet.save()
    res.status(200).json(newTweet)

  } catch (err) {
    next(err)
  } 
}

export const getTweets: RequestHandler = async (req, res, next) => {
  
  try {
    const tweets = await Tweet.find({ relations: ['user'] })

    if (!tweets) {
      throw new Error('Could not find any tweets')
    }

    res.status(200).json(tweets)
    //To quickly clear table from tweets for testing
    //Tweet.clear()    
  } catch (err) {
    next(err)
  }
}

export const getTweet: RequestHandler = async (req, res, next) => {  
  
  try {
    const id: string = req.params.id
    const tweet = await Tweet.findOne({ id }, { relations: ['user'] })
    
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