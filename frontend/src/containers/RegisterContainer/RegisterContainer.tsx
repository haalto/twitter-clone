import React, { useState } from 'react'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import { register } from '../../services/registerServices'
import { useHistory } from 'react-router-dom'

const RegisterContainer = () => {
  
  const [usernameInput, setUsernameInput] = useState('')
  const [nicknameInput, setNicknameInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const history = useHistory()
  const goLogin = () => history.push('/login')
  
  const handleSubmit = async (e: React.FormEvent) => {    
    e.preventDefault()

    const newUserObject = {
      username: usernameInput,
      nickname: nicknameInput,
      password: passwordInput
    }

    try {
      const response = await register(newUserObject)
      console.log(response)
      goLogin()
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
    <RegisterForm
      handleSubmit={handleSubmit}
      usernameInput={usernameInput}
      nicknameInput={nicknameInput}
      passwordInput={passwordInput}
      handleUsernameChange={setUsernameInput}
      handleNicknameChange={setNicknameInput}
      handlePasswordChange={setPasswordInput}
    />
  )
}

export default RegisterContainer