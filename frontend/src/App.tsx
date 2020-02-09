import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import LoginContainer from './containers/LoginContainer/LoginContainer'
import RegisterContainer from './containers/RegisterContainer/RegisterContainer'
import LandingPage from './components/LandingPage/LandingPage'
import TweetContainer from './containers/TweetContainer/TweetContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App: React.FC = () => {
  
  interface State {
    system: {
      token: string
    }
  }

  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const username = localStorage.getItem('username')

    if (token && username) {
      dispatch({type: 'UPDATE_SESSION', payload: {loggedIn: true, token: token, username: username}})
    }
  })

  const token = useSelector((state:State) => state.system.token)

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={token ? TweetContainer : LandingPage}/>
          <Route exact path="/login" component={token ? TweetContainer : LoginContainer}/>
          <Route exact path="/register" component={token ? TweetContainer : RegisterContainer}/>
        </Switch>
      </div>
    </BrowserRouter>  
  )
}

export default App