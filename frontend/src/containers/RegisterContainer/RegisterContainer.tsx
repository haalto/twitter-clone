import React, { useRef } from 'react'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import { register } from '../../services/registerServices'

const RegisterContainer = () => {
  
  const usernameInputRef = useRef<HTMLInputElement>(null)
  const nicknameInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)
  
  const handleSubmit = async (e: React.FormEvent) => {    
    e.preventDefault()

    const username = usernameInputRef.current!.value
    const nickname = usernameInputRef.current!.value
    const password = usernameInputRef.current!.value

    const newUserObject = {
      username,
      nickname,
      password
    }

    try {
      const response = await register(newUserObject)
      console.log(response)
      usernameInputRef.current!.value = ''
      nicknameInputRef.current!.value = ''
      passwordInputRef.current!.value = ''
    }

    catch (e) {
      console.log(e)
    }
  }
  
  return (
    <RegisterForm
      handleSubmit={handleSubmit}
      usernameInputRef={usernameInputRef}
      nicknameInputRef={nicknameInputRef}
      passwordInputRef={passwordInputRef}
    />
  )
}

export default RegisterContainer