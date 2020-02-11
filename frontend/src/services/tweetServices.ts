import axios from 'axios'

const baseUrl: string = `http://localhost:3002/api/tweets`

export const newTweet = ( newTweet: {}, token: string ) => {
  const config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }  
  return axios.post(baseUrl, newTweet, config)
}

export const getTweets = async () => {
  const response = await axios.get(baseUrl)
  return response
}