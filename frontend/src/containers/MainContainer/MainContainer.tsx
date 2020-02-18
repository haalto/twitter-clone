import React, { useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from '../../components/Navbar/Navbar'
import NewTweetForm from '../../components/NewTweetForm/NewTweetForm'
import TweetList from '../../components/TweetList/TweetList'
import { newTweet, getTweets } from '../../services/tweetServices'

const MainContainer = () => {
  
  interface SystemState {
    system: {
      token: string,
      loggedIn: boolean,
      username: string
    }
  }

  interface Tweet {
    content: string
  }

  interface TweetState {
    tweets: {
      tweets: Tweet[]
    }
  }
  const dispatch = useDispatch()
  const token = useSelector((state: SystemState) => state.system.token)
  const tweets = useSelector((state: TweetState) => state.tweets.tweets)
  const tweetInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTweets()
      if (response) {
        dispatch({type: 'ADD_TWEETS', payload: response.data})
      }
    }
    fetchData()        
  }, [dispatch])

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
      console.log(response.data)
      dispatch({type: 'SEND_TWEET', payload: response.data})
      tweetInputRef.current!.value = ''
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
      <TweetList tweets={tweets}/>
    </div>
  )
}

export default MainContainer