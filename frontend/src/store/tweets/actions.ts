import { Tweet, SEND_TWEET, SET_TWEETS, TweetActionTypes } from './types'

export function sendTweet(newTweet: Tweet): TweetActionTypes {
  return {
    type: SEND_TWEET,
    payload: newTweet
  }
}

export function setTweets(tweets: Tweet[]): TweetActionTypes {
  return {
    type: SET_TWEETS,
    payload: tweets
  }
}