import React, { CSSProperties } from 'react'
import Tweet from '../Tweet/Tweet'
import { orderBy } from 'lodash'
import { TweetInterface } from '../../types/TweetInterface'
 
interface Props {
  tweets: TweetInterface[]
  handleLike: any
}

const TweetList: React.FC<Props> = ({ tweets, handleLike }) => {
  
  const sortedTweets = orderBy(tweets, ['createdAt'], 'desc')
  const renderTweets = (tweets: TweetInterface[]) => tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} handleLike={handleLike}/>)
  
  return (
    <div style={listStyle}>
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