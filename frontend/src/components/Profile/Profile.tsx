import React from 'react'
import { UserInterface } from '../../types/UserInterface'

interface Props {
  user: UserInterface
}

const Profile: React.FC<Props> = ({ user }) => {
  return (
    <div>
      <h1>{user.nickname}</h1>
      <h4>{user.username}</h4>
      <h5>{user.bio}</h5>
    </div>
  )
}

export default Profile