import React from 'react'
import { UserInterface } from '../../types/UserInterface'
import { useHistory } from 'react-router'
import Radium from 'radium'

interface Props {
  user: UserInterface
}

const Profile: React.FC<Props> = ({ user }) => {

  const history = useHistory()

  history.listen(_ => {
    window.scrollTo(0, 0)  
  })

  return (
    <div>
      <h1>{user.nickname}</h1>
      <h4>{user.username}</h4>
      <h5>{user.bio}</h5>
      <button key="follow-button" style={followButtonStyle}>Follow {user.nickname}</button>
    </div>
  )
}

const followButtonStyle: any = {
  color: 'black',
  background: 'white',
  padding: '5px',
  borderRadius: '20px',
  border: 'none',
  transition: 'all 0.4s ease 0s',
  fontFamily: 'inherit',
  fontSize: '1em',
  width: '20%',
  margin: '2vh',
  ':hover': {
    color: 'white',
    background: 'black',
    cursor: 'pointer'
  }
}

export default Radium(Profile)