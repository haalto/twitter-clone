import { NotificationState, UPDATE_NOTIFICATION, NotificationActionTypes } from './types'

export function updateSession(newNotification: NotificationState): NotificationActionTypes {
  return {
    type: UPDATE_NOTIFICATION,
    payload: newNotification
  }
}
