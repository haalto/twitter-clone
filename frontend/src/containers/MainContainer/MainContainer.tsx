import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from '../../components/Navbar/Navbar'
import NewTweetForm from '../../components/NewTweetForm/NewTweetForm'
import TweetList from '../../components/TweetList/TweetList'
import { newTweet, getTweets, likeTweet } from '../../services/tweetServices'
import { SystemInterface } from '../../types/SystemInterface'
import { TweetInterface } from '../../types/TweetInterface'

const MainContainer = () => {

  interface TweetState {
    tweets: {
      tweets: TweetInterface[]
    }
  }
  
  const dispatch = useDispatch()
  const token = useSelector((state: SystemInterface) => state.system.token)
  const tweets = useSelector((state: TweetState) => state.tweets.tweets)
  const [newTweetInput, setNewTweetInput] = useState('')

  useEffect(() => {
    const fetchData = async () => {      
      try {
        const response = await getTweets()
        if (response.data) {
          dispatch({type: 'SET_TWEETS', payload: response.data})
        }
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()        
  }, [dispatch])

  const handleLogout = () => {    
    dispatch({ type: 'UPDATE_SESSION', payload: { loggedIn: false, token: null, username: null } })
    dispatch({ type: 'SET_TWEETS', payload: [] })
    localStorage.clear()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const tweetText = newTweetInput
    const tweetObject = {
      content: tweetText
    }

    try {
      const response = await newTweet(tweetObject, token)
      dispatch({type: 'SEND_TWEET', payload: response.data})
      setNewTweetInput('')
    }
    catch (err) {
      console.log(err)
    }     
  }

  const handleLike = async (tweetId: string) => {
    try {
      const response = await likeTweet(tweetId, token)
      const updatedTweet: TweetInterface = response.data
      const updatedTweets = tweets.map(t => (t.id === updatedTweet.id) ? updatedTweet : t)
      dispatch({ type: 'SET_TWEETS', payload: updatedTweets })
    } catch (err) {
      console.log(err)
    }
  } 
  
  return (
    <div>
      <Navbar 
        handleLogout={handleLogout}
      />
      <NewTweetForm
        newTweetInput={newTweetInput}
        handleNewTweet={setNewTweetInput}
        handleSubmit={handleSubmit}
      />
      <TweetList 
        tweets={tweets}
        handleLike={handleLike}
      />
    </div>
  )
}

export default MainContainer