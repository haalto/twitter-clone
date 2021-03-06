import React, { useEffect, CSSProperties } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import LoginContainer from './containers/LoginContainer/LoginContainer'
import RegisterContainer from './containers/RegisterContainer/RegisterContainer'
import LandingPage from './components/LandingPage/LandingPage'
import MainContainer from './containers/MainContainer/MainContainer'
import ProfileContainer from './containers/ProfileContainer/ProfileContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App: React.FC = () => {
  
  interface State {
    system: {
      token: string
    }
  }

  const token = useSelector((state:State) => state.system.token)
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const username = localStorage.getItem('username')

    if (token && username) {
      dispatch({ type: 'UPDATE_SESSION', payload: { loggedIn: true, token: token, username: username } })
    }
  }, [dispatch])

  return (
    <BrowserRouter>
      <div className="App" style={appStyle}>
        <Switch>
          <Route exact path="/" component={token ? MainContainer : LandingPage}/>
          <Route exact path="/login" component={LoginContainer}/>
          <Route exact path="/register" component={RegisterContainer}/>
          <Route path="/:username" component={ProfileContainer}/>
        </Switch>
      </div>
    </BrowserRouter>  
  )
}

const appStyle: CSSProperties = {
  height: '100%'
}

export default App