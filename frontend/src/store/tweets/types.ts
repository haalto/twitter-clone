interface User {
  id: string
}

export interface Tweet {
  content: string
  likes: number
  createdAt: Date
  user: {
    username: string
    nickname: string
    id: string
  },
  likedBy: User[]
}

export interface TweetListState {
  tweets: Tweet[]
}

export const SEND_TWEET = 'SEND_TWEET'

interface SendTweetAction {
  type: typeof SEND_TWEET
  payload: Tweet
}

export const SET_TWEETS = 'SET_TWEETS'

interface SetTweetsAction {
  type: typeof SET_TWEETS
  payload: Tweet[]
}


export type TweetActionTypes = SendTweetAction | SetTweetsAction