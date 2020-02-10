import axios from 'axios'

const baseUrl: string = `http://localhost:3002/api/tweets`

export const newTweet = ( newTweet: {}, token: string ) => {
  return axios.post(baseUrl, newTweet)
}