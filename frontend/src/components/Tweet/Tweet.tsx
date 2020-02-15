import React from 'react'

interface Props {
  username: string
  nickname: string
  content: string
  likes: number  
}

const Tweet: React.FC<Props> = ({ username, nickname, content, likes }) => {
  return (
    <div>
      <div>{username}</div>
      <div>{nickname}</div>
      <div>{content}</div>
      <div>{likes}</div>
    </div>
  )
}

export default Tweet