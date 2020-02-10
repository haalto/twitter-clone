import { NotificationState, NotificationActionTypes, UPDATE_NOTIFICATION } from './types'

const initialState: NotificationState = {
  message: null
}

export function notificationReducer(
  state = initialState,
  action: NotificationActionTypes,
): NotificationState {
  switch (action.type) {
    
    case UPDATE_NOTIFICATION: {
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return state
  }
}