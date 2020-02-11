import { systemReducer } from './system/reducers'
import { notificationReducer } from './notifications/reducers'
import { tweetReducer } from './tweets/reducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  notification: notificationReducer,
  system: systemReducer,
  tweets: tweetReducer
})

export default rootReducer