import { SEND_TWEET, ADD_TWEETS, TweetActionTypes, TweetListState } from './types'

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

    case ADD_TWEETS: {
      console.log('adding all tweets')
      return {
        tweets: state.tweets.concat(action.payload)
      }
    }

    default:
      return state
  }
}