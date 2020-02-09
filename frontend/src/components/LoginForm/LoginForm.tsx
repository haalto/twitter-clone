import React from 'react';
import { useHistory } from 'react-router-dom'

interface Props {
  handleSubmit: any,
  usernameInputRef: any,
  passwordInputRef: any
}

const LoginForm: React.FC<Props> = ({ handleSubmit, usernameInputRef, passwordInputRef }) => {
  
  const history = useHistory()
  const goHome = () => history.push('/')

  return (
    <div>
      <button onClick={goHome}>Back</button>
      <form onSubmit={handleSubmit}>
        <label>
          Login to Twitter
        </label>
        <input 
          type="text" 
          placeholder="username"
          ref={usernameInputRef}>    
        </input>
        <input 
          type="password" 
          placeholder="password"
          ref={passwordInputRef}>
        </input>
        <button type="submit">
          login
        </button>
      </form>
    </div>
  )
}

export default LoginForm