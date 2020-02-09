import React from 'react'
import { useDispatch } from 'react-redux' 

const TweetContainer = () => {
  
  const dispatch = useDispatch()
  
  const handleLogout = () => {    
    dispatch({type: 'UPDATE_SESSION', payload: {loggedIn: false, token: null, username: null}})
    localStorage.clear()
  }

  return (
    <div>
      <nav>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      tweets are here
    </div>
  )
}

export default TweetContainer