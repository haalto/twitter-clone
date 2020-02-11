import { Tweet, SEND_TWEET, ADD_TWEETS, TweetActionTypes } from './types'

export function sendTweet(newTweet: Tweet): TweetActionTypes {
  return {
    type: SEND_TWEET,
    payload: newTweet
  }
}

export function addTweets(tweets: Tweet[]): TweetActionTypes {
  return {
    type: ADD_TWEETS,
    payload: tweets
  }
}