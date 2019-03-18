import axios from 'axios'
import { User } from '../types/InitialState'
import { resolveUri } from '../utils/resolveUri'

const HTTP = axios.create({
  withCredentials: true
})

const setCredentials = (credentials: any) => {
  console.log(credentials)
}

const login = async (): Promise<User> => {
  const response = await HTTP.get(resolveUri() + '/users/me')
  console.log(response)
  return response.data
}

export default { login, setCredentials }
