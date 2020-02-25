import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../../services/loginServices'
import LoginForm from '../../components/LoginForm/LoginForm'
import Notification from '../../components/Notification/Notification'
import { SystemInterface } from '../../types/SystemInterface'
import { NotificationInterface } from '../../types/NotificationInterface'

const LoginContainer: React.FC = () => {
  
  const message = useSelector((state: NotificationInterface) => state.notification.message)
  const loggedIn = useSelector((state: SystemInterface) => state.system.loggedIn)
  const dispatch = useDispatch()
  
  const [usernameInput, setUsername] = useState('')
  const [passwordInput, setPassoword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault()
     
    const loginInfo = {
      username: usernameInput,
      password: passwordInput
    }

    try {
      const response = await login(loginInfo)
      const token = response.data.token
      dispatch({type: 'UPDATE_SESSION', payload: {loggedIn: true, token: token, username: usernameInput}})

      localStorage.setItem('token', token)
      localStorage.setItem('username', usernameInput)      
    }
    catch (err) {
      dispatch({type: 'UPDATE_NOTIFICATION', payload: {message: 'Username or password is wrong!'}})
      setTimeout(() => {
        dispatch({type: 'UPDATE_NOTIFICATION', payload: {message: null}})
      }, 2000)     
    }
  }
  
  if (loggedIn) {
   return (<Redirect to="/"></Redirect>)
  } else {
    return (
      <div>
        <Notification 
          message={message}>        
        </Notification>
        <LoginForm 
          handleSubmit={handleSubmit}
          usernameInput={usernameInput}
          passwordInput={passwordInput}
          handleUsernameInputChange={setUsername}
          handlePasswordInputChange={setPassoword}>
        </LoginForm>
      </div>
    )
  }
}

export default LoginContainer