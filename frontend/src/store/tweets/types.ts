export interface Tweet {
  content: string
}

export interface TweetListState {
  tweets: Tweet[]
}

export const SEND_TWEET = 'SEND_TWEET'

interface SendTweetAction {
  type: typeof SEND_TWEET
  payload: Tweet
}

export const ADD_TWEETS = 'ADD_TWEETS'

interface AddTweetsAction {
  type: typeof ADD_TWEETS
  payload: Tweet[]
}


export type TweetActionTypes = SendTweetAction | AddTweetsAction