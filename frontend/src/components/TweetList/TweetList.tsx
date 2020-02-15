import React from 'react'
import Tweet from '../Tweet/Tweet'
interface Tweet {
  content: string
}

interface Props {
  tweets: Tweet[]
}

const TweetList: React.FC<Props> = ({ tweets }) => {
  
  const renderTweets = (tweets: Tweet[]) => tweets.map(tweet => <div key={Math.random()}>
    {tweet.content}</div>)
  
  return (
    <div>
      {tweets.length === 0 ? 'No tweets available!' : renderTweets(tweets)}
    </div>
  )
}

export default TweetList