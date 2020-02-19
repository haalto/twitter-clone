import React, { CSSProperties } from 'react'
import Tweet from '../Tweet/Tweet'
import { orderBy } from 'lodash'
 
interface TweetInterface {
  id: string
  content: string
  likes: number
  createdAt: Date
  user: {
    username: string
    nickname: string
    id: string
  }
  likedBy: User[]
}

interface User {
  id: string
  username: string
}

interface Props {
  tweets: TweetInterface[]
  handleLike: any
}

const TweetList: React.FC<Props> = ({ tweets, handleLike }) => {
  
  const sortedTweets = orderBy(tweets, ['createdAt'], 'desc')
  const renderTweets = (tweets: TweetInterface[]) => tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} handleLike={handleLike}/>)
  
  return (
    <div style={listStyle}>
      <h1 style={headerStyle}>This is your feed of "tweets"!</h1>
      {tweets.length === 0 ? 'No tweets available!' : renderTweets(sortedTweets)}
    </div>
  )
}

const listStyle: CSSProperties = {
  margin: '5vh auto',
}

const headerStyle: CSSProperties = {
  textAlign: 'center'
}

export default TweetList