import React, { CSSProperties } from 'react'
import Tweet from '../Tweet/Tweet'
import { orderBy } from 'lodash'
import { TweetInterface } from '../../types/TweetInterface'
import {useTransition, animated} from 'react-spring'
 
interface Props {
  tweets: TweetInterface[]
  handleLike: any
}

const TweetList: React.FC<Props> = ({ tweets, handleLike }) => {
  
  const sortedTweets = orderBy(tweets, ['createdAt'], 'desc')

  const transitions = useTransition(sortedTweets, tweet => tweet.id, {
    from: { transform: 'translate3d(3px,-20px, 10px)', opacity: '0' },
    enter: { transform: 'translate3d(0, 0px,0)', opacity: '1' },
    leave: { transform: 'translate3d(0,-40px,0)' },
  })

  const renderTweets = transitions.map(({item, props, key}) => 
    <animated.div style={props} key={key}><Tweet tweet={item} handleLike={handleLike}/></animated.div>
  )
  //Render function for non-animated tweets
  //const renderTweets = (tweets: TweetInterface[]) => tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} handleLike={handleLike}/>)
  
  return (
    <div style={listStyle}>
      {tweets.length === 0 ? '' : renderTweets}
    </div>
  )
}

const listStyle: CSSProperties = {
  margin: '5vh auto',
}

export default TweetList