import axios from 'axios'

const baseUrl = 'http://localhost:3002/api/users'

export const getUser = async (username: string) => {
  const response = await axios.get(`${baseUrl}/${username}`)
  return response
}