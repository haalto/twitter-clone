import React from 'react';
import { useHistory } from 'react-router-dom'

interface Props {
  handleSubmit: any,
  usernameInput: string,
  passwordInput: string,
  handleUsernameInputChange: any,
  handlePasswordInputChange: any
}

const LoginForm: React.FC<Props> = ({ handleSubmit, usernameInput, passwordInput, handleUsernameInputChange, handlePasswordInputChange }) => {
  
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
          value={usernameInput}
          onChange={(e) => handleUsernameInputChange(e.target.value)}>    
        </input>
        <input 
          type="password" 
          placeholder="password"
          value={passwordInput}
          onChange={(e) => handlePasswordInputChange(e.target.value)}>
        </input>
        <button type="submit">
          login
        </button>
      </form>
    </div>
  )
}

export default LoginForm