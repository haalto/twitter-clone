import { Router } from 'express'
const tweetRouter = Router()
import { createTweet,
         getTweet,
         getTweets,
         deleteTweet
        } 
from '../controllers/tweets'

tweetRouter.post('/', createTweet)

tweetRouter.get('/', getTweets)

tweetRouter.get('/:id', getTweet)

tweetRouter.delete('/:id', deleteTweet)

export default tweetRouter