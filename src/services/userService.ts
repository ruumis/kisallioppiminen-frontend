import axios from 'axios'
import { User } from '../types/InitialState'

const HTTP = axios.create({
  withCredentials: true
})

const setCredentials = (credentials: any) => {
  console.log(credentials)
}

const login = async (): Promise<User> => {
  const response = await HTTP.get('http://localhost:8080/users/me')
  console.log(response)
  return response.data
}

export default { login, setCredentials }
