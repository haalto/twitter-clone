import { Router } from 'express'
const tweetRouter = Router()
import { checkJwt } from '../utils/middleware'
import { createTweet,
         getTweet,
         getTweets,
         updateTweet
         //deleteTweet
        } 
from '../controllers/tweets'

tweetRouter.post('/', [checkJwt], createTweet)

tweetRouter.get('/', getTweets)

tweetRouter.get('/:id', getTweet)

tweetRouter.put('/:id', [checkJwt], updateTweet)

//tweetRouter.delete('/:id', deleteTweet)

export default tweetRouter