import { UserInterface } from './UserInterface'

export interface TweetInterface {
  id: string
  content: string
  likes: number
  createdAt: Date
  user: UserInterface
  likedBy: UserInterface[]
}