import axios, { AxiosRequestConfig } from 'axios'
import { User } from '../types/InitialState'
import { resolveUri } from '../utils/resolveUri'

const HTTP = axios.create()

const setCredentials = (credentials: any) => {
  console.log(credentials)
}

const login = async (): Promise<User> => {
  const response = await HTTP.get(resolveUri() + '/users/me', getRequestConfig())
  console.log(response)
  return response.data
}

const getRequestConfig = () => {
  return {
    headers: {
      Authorization: `Bearer ${typeof window !== 'undefined' ? window.localStorage.getItem('ko_token') : ''}`
    }
  }
}

export default { login, setCredentials }
