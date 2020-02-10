import { systemReducer } from './system/reducers'
import { notificationReducer } from './notifications/reducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  notification: notificationReducer,
  system: systemReducer
})

export default rootReducer