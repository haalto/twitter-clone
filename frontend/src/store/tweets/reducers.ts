import { SEND_TWEET, SET_TWEETS, TweetActionTypes, TweetListState } from './types'

const initialState: TweetListState = {
  tweets: []
}

export function tweetReducer(
  state = initialState,
  action: TweetActionTypes, 
): TweetListState {
  switch (action.type) {
    
    case SEND_TWEET: {
      return {
        tweets: [...state.tweets, action.payload]
      }
    }

    case SET_TWEETS: {
      return {
        tweets: state.tweets = action.payload
      }
    }

    default:
      return state
  }
}