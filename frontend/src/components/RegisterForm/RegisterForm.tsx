import React from 'react'
import { useHistory } from 'react-router-dom'

interface Props {
  handleSubmit: any,
  usernameInput: string,
  nicknameInput: string,
  passwordInput: string,
  handleUsernameChange: any,
  handleNicknameChange: any,
  handlePasswordChange: any
}

const RegisterForm: React.FC<Props> = ({ handleSubmit, usernameInput, nicknameInput, passwordInput, handleUsernameChange,handleNicknameChange, handlePasswordChange }) => {

  const history = useHistory()
  const goHome = () => history.push('/')

  return (
    <div>
      <button onClick={goHome}>Back</button>
      <form onSubmit={handleSubmit}>
        <label>Register</label>
        <input 
          type="text" 
          placeholder="username"
          value={usernameInput}
          onChange={(e) => handleUsernameChange(e.target.value)}>
        </input>
        <input 
          type="text" 
          placeholder="nickname"
          value={nicknameInput}
          onChange={(e) => handleNicknameChange(e.target.value)}>    
        </input>
        <input 
          type="password" 
          placeholder="password"
          value={passwordInput}
          onChange={(e) => handlePasswordChange(e.target.value)}>         
        </input>
        <button 
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default RegisterForm