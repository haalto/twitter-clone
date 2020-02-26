import React from 'react'
import { useHistory } from 'react-router-dom'
import Radium from 'radium'

const LandingPage: React.FC = () => {

  const history = useHistory()
  const goLogin = () => history.push('/login')
  const goRegister = () => history.push('/register')

  return (
    <div>
      <h1>See what’s happening in the world right now</h1>
      <h3>Join "Twitter" today :D</h3>
      <button key="registerButton" style={registerButtonStyle} onClick={goRegister}>Register</button>
      <button key="loginButton" style={loginButtonStyle} onClick={goLogin}>Login</button>
    </div>
  )
}

const registerButtonStyle: any = {
  color: 'black',
  textDecoration: 'none',
  background: 'white',
  padding: '5px',
  borderRadius: '20px',
  display: 'inline-block',
  border: '1px solid black',
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

const loginButtonStyle: any = {
  color: 'black',
  textDecoration: 'none',
  border: '1px solid black',
  background: 'white',
  padding: '5px',
  borderRadius: '20px',
  display: 'inline-block',
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

export default Radium(LandingPage)