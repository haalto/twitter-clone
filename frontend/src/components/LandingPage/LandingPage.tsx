import React, { CSSProperties } from 'react'
import { useHistory } from 'react-router-dom'

const LandingPage: React.FC = () => {

  const history = useHistory()
  const goLogin = () => history.push('/login')
  const goRegister = () => history.push('/register')

  return (
    <div>
      <h1>See what’s happening in the world right now</h1>
      <h3>Join "Twitter" today :D</h3>
      <button style={registerButtonStyle} onClick={goRegister}>Register</button>
      <button style={loginButtonStyle} onClick={goLogin}>Login</button>
    </div>
  )
}

const registerButtonStyle: CSSProperties = {
  color: 'black',
  textDecoration: 'none',
  background: 'white',
  padding: '5px',
  borderRadius: '20px',
  display: 'inline-block',
  border: 'none',
  transition: 'all 0.4s ease 0s',
  fontFamily: 'Shadows Into Light, cursive',
  fontSize: '1em',
  width: '20%',
  margin: '2vh'
}

const loginButtonStyle: CSSProperties = {
  color: 'black',
  textDecoration: 'none',
  background: 'white',
  padding: '5px',
  borderRadius: '20px',
  display: 'inline-block',
  border: 'none',
  transition: 'all 0.4s ease 0s',
  fontFamily: 'Shadows Into Light, cursive',
  fontSize: '1em',
  width: '20%',
  margin: '2vh'
}

export default LandingPage