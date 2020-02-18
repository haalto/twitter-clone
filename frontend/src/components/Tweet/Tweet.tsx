import React, { CSSProperties } from 'react'

interface Props {
  tweet: {
    content: string
    likes: number
    createdAt: Date
    user: {
      username: string
      nickname: string
      id: string
    }
  }
}

const Tweet: React.FC<Props> = ({ tweet }) => {
  return (
    <div style={frameStyle}>
      <div style={contentStyle}>
        <div style={headerStyle}> 
          <span>{tweet.user.nickname}</span>
          <span style={nicknameStyle} > @{tweet.user.username}</span>
        </div>
        <div style={dateStyle}>{tweet.createdAt}</div>
        <p style={contentTextStyle}>{tweet.content}</p>
        <div>
          <span style={likeStyle}>{tweet.likes} likes</span>
        </div>
      </div>
    </div>
  )
}

const frameStyle: CSSProperties = {
  margin: '5vh',
  backgroundColor: 'white',
  borderRadius: '10px',
  boxShadow: '5px 5px 2px grey'
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
  fontSize: '0.9em'
}

export default Tweet