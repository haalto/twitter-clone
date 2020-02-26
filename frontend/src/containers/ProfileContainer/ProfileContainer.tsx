import React, { useEffect, useState } from 'react'
import TweetList from '../../components/TweetList/TweetList'
import { useParams } from 'react-router-dom'
import { getUser } from '../../services/userServices'
import { UserInterface } from '../../types/UserInterface'
import { TweetInterface } from '../../types/TweetInterface'
import { SystemInterface } from '../../types/SystemInterface'
import { useSelector, useDispatch } from 'react-redux'
import { likeTweet } from '../../services/tweetServices'
import Navbar from '../../components/Navbar/Navbar'
import Profile from '../../components/Profile/Profile'
 
const ProfileContainer: React.FC = () => {  
  const { username } = useParams()
  const [user, setUser] = useState<UserInterface | null>(null)
  const token = useSelector((state: SystemInterface) => state.system.token)
  const dispatch = useDispatch()

  useEffect(() => {    
    const fetchUser = async () => {
      try {
        if (username) {
          const response = await getUser(username)
          const userData: UserInterface = response.data
          setUser(userData)
        }        
      } catch (e) {
        console.log(e)
      }
    }
   fetchUser()
  }, [username])

  const handleLike = async (tweetId: string) => {
    try {
      if (user !== null) {
        const response = await likeTweet(tweetId, token)
        const updatedTweet: TweetInterface = response.data
        const updatedTweets = user.tweets.map(t => (t.id === updatedTweet.id) ? updatedTweet : t)
        const updatedUser = {tweets: updatedTweets, ...updatedTweet.user}
        setUser(updatedUser)
      }      
    } catch (err) {
      console.log(err)
    }
  }

  const handleLogout = () => {    
    dispatch({ type: 'UPDATE_SESSION', payload: { loggedIn: false, token: null, username: null } })
    dispatch({ type: 'SET_TWEETS', payload: [] })
    localStorage.clear()
  }

  return(
    <div>
      {!user ? 'Loading stuff' :
      <div>
        <Navbar handleLogout={handleLogout}/>
        <Profile user={user}/>
        <TweetList tweets={user.tweets} handleLike={handleLike}/> 
      </div>     
      }
    </div>
  )
}

export default ProfileContainer