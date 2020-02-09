import React from 'react'
import { useHistory } from 'react-router-dom'

//Styles
const headerStyle = {
  marginTop: '10vh'
}

const buttonStyle = {
  marginTop: '10vh',
  marginBottom: '10vh'
}

const LandingPage: React.FC = () => {

  const history = useHistory()
  const goLogin = () => history.push('/login')
  const goRegister = () => history.push('/register')

  return (
    <div>
      <h1>See what’s happening in the world right now</h1>
      <h3>Join Twitter today.</h3>
      <button onClick={goRegister}>Register</button>
      <button onClick={goLogin}>Login</button>
    </div>
  )
}

export default LandingPage