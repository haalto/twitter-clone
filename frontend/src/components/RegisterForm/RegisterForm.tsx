import React from 'react'
import { useHistory } from 'react-router-dom'

interface Props {
  handleSubmit: any,
  usernameInputRef: any,
  nicknameInputRef: any,
  passwordInputRef: any
}

const RegisterForm: React.FC<Props> = ({ handleSubmit, usernameInputRef, nicknameInputRef, passwordInputRef }) => {

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
          ref={usernameInputRef}>
        </input>
        <input 
          type="text" 
          placeholder="nickname"
          ref={nicknameInputRef}>    
        </input>
        <input 
          type="password" 
          placeholder="password"
          ref={passwordInputRef}>         
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