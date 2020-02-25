import { TweetInterface } from "./TweetInterface";

export  interface UserInterface {
  id: string
  username: string
  nickname: string
  tweets: TweetInterface[]
  bio: string
}