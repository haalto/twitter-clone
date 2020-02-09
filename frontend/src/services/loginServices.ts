import axios from 'axios'
 
const baseUrl: string = `http://localhost:3002/api/login`

interface params {
  username: string,
  password: string
}

export const login = async ( loginInfo: params ) => {
  return await axios.post(baseUrl, loginInfo)
}