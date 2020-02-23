import axios from 'axios'
 
const baseUrl: string = `http://localhost:3002/api/users`

interface Params {
  username: string,
  nickname: string,
  password: string
}

export const register = async ( registerInfo: Params ) => {
  return await axios.post(baseUrl, registerInfo)
}