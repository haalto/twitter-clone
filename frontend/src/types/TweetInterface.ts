import { UserInterface } from './UserInterface'

export interface TweetInterface {
  id: string
  content: string
  likes: number
  createdAt: Date
  user: {
    username: string
    nickname: string
    id: string
  },
  likedBy: UserInterface[]
}