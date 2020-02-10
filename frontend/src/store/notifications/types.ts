export interface NotificationState {
  message: string | null
}

export const UPDATE_NOTIFICATION = 'UPDATE_NOTIFICATION'

interface UpdateNotificationAction {
  type: typeof UPDATE_NOTIFICATION
  payload: NotificationState
}

export type NotificationActionTypes = UpdateNotificationAction