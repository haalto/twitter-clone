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
    const createdTweet = await Tweet.findOne({ id: newTweet.id}, {relations: ['user', 'likedBy']})
    res.status(200).json(createdTweet)

  } catch (err) {
    next(err)
  } 
}

export const getTweets: RequestHandler = async (req, res, next) => {
  
  try {
    const tweets = await Tweet.find({ relations: ['user', 'likedBy'] })

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
    const tweet = await Tweet.findOne({ id }, { relations: ['user', 'likedBy'] })
    
    if (!tweet) {
      throw new Error('Tweet does not exist')    
    } else {
      res.status(200).json(tweet)
    }

  } catch (err) {
    next(err)
  }
}

export const updateTweet: RequestHandler = async (req, res, next) => {
  try {
    const tweetId: string = req.params.id
    const jwtPayload = res.locals.decodedToken
    const userId = await jwtPayload.userId
    const type = (req.body as { type: string}).type 

    const tweet = await Tweet.findOne({ id: tweetId }, { relations: ['user', 'likedBy'] })
    const user = await User.findOne({ id: userId })

    if (!tweet || !user) {
      throw new Error('Tweet id or User id is not valid')
    }

    //Here we define what kind of an update we are doing to the tweet!
    if (type === 'like') {
      
      if (tweet?.likedBy.some(u => u.id === userId)) {
        const filteredArray = tweet.likedBy.filter(u => u.id !==  user.id)
        tweet.likedBy = filteredArray
        await tweet.save()
        res.json(tweet)

      } else {
        tweet.likedBy.push(user)
        await tweet.save()  
        res.json(tweet)   
      }
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