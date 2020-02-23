import React, { CSSProperties } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { TweetInterface } from '../../types/TweetInterface'
import { SystemInterface } from '../../types/SystemInterface'
 
interface Props {
  tweet: TweetInterface
  handleLike: any
}

const Tweet: React.FC<Props> = ({ tweet, handleLike }) => {

  const username = useSelector((state: SystemInterface) => state.system.username)

  return (
    <div style={frameStyle}>
      <div style={contentStyle}>
        <div style={headerStyle}> 
          <span>{tweet.user.nickname}</span>
          <span style={nicknameStyle} > @{tweet.user.username}</span>
          <div style={dateStyle}>{tweet.createdAt}</div>
        </div>       
        <p style={contentTextStyle}>{tweet.content}</p>
        <div style={footerStyle}>
          {
            tweet.likedBy.some(u => u.username === username)
            ? <FontAwesomeIcon color='red' onClick={() => handleLike(tweet.id)} icon={faHeart}/>
            : <FontAwesomeIcon onClick={() => handleLike(tweet.id)} icon={faHeart}/>
          }
          <span style={likeStyle}>{tweet.likedBy.length} likes</span>
        </div>
      </div>
    </div>
  )
}

const frameStyle: CSSProperties = {
  margin: '5vh',
  backgroundColor: 'white',
  borderRadius: '10px',
  boxShadow: '5px 5px 2px rgba(30,30,30, 0.6)'
}

const contentStyle: CSSProperties = {
  margin: '3vh'
}

const headerStyle: CSSProperties = {
  borderBottom: '1px solid rgb(245,245,245)'
}

const nicknameStyle: CSSProperties = {
  color: "grey"
}

const dateStyle: CSSProperties = {
  color: 'grey',
  fontSize: '0.7em'
}

const contentTextStyle: CSSProperties = {
  fontSize: '1.3em',
  whiteSpace: 'pre-line'
}

const likeStyle: CSSProperties = {
  fontSize: '0.9em',
  marginLeft: '10px'
}

const footerStyle: CSSProperties = {
  borderTop: '1px solid rgb(245,245,245)'
}

export default Tweet