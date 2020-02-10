import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from '../../components/Navbar/Navbar'
import NewTweetForm from '../../components/NewTweetForm/NewTweetForm'
import TweetList from '../../components/TweetList/TweetList'
import { newTweet } from '../../services/tweetServices'

const MainContainer = () => {
  
  interface SystemState {
    system: {
      token: string
    }
  }

  const dispatch = useDispatch()
  const token = useSelector((state: SystemState) => state.system.token)
  
  const tweetInputRef = useRef<HTMLInputElement>(null)

  const handleLogout = () => {    
    dispatch({type: 'UPDATE_SESSION', payload: {loggedIn: false, token: null, username: null}})
    localStorage.clear()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const tweetText = tweetInputRef.current!.value
    const tweetObject = {
      content: tweetText
    }

    try {
      const response = await newTweet(tweetObject, token)
      console.log(response)
    }

    catch (err) {
      console.log(err)
    }    
  }
  
  return (
    <div>
      <Navbar handleLogout={handleLogout}/>
      <NewTweetForm
        tweetInputRef={tweetInputRef}
        handleSubmit={handleSubmit}
      />
      <TweetList/>
    </div>
  )
}

export default MainContainer