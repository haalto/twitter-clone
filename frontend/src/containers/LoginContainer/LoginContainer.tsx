import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../../services/loginServices'
import LoginForm from '../../components/LoginForm/LoginForm'

const LoginContainer: React.FC = () => {
  
  interface State {
    system: {
      loggedIn: boolean
    }
  }

  const loggedIn = useSelector((state: State) => state.system.loggedIn)
  const dispatch = useDispatch()

  const usernameInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault()
    const username: string = usernameInputRef.current!.value
    const password: string = passwordInputRef.current!.value
    
    const loginInfo = {
      username,
      password
    }

    usernameInputRef.current!.value = ''
    passwordInputRef.current!.value = ''

    try {
      const response = await login(loginInfo)
      const token = response.data.token
      dispatch({type: 'UPDATE_SESSION', payload: {loggedIn: true, token: token, username: username}})

      localStorage.setItem('token', token)
      localStorage.setItem('username', username)
    }

    catch (err) {
      console.log(err)
    }
  }
  
  if (loggedIn) {
   return (<Redirect to="/"></Redirect>)
  } else {
    return (
      <LoginForm 
        handleSubmit={handleSubmit}
        usernameInputRef={usernameInputRef}
        passwordInputRef={passwordInputRef}>
      </LoginForm>
    )
  }
}

export default LoginContainer