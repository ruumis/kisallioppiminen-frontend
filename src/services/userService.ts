import axios, { AxiosRequestConfig } from 'axios'
import { User } from '../types/InitialState'
import { resolveUri } from '../utils/resolveUri'
import { getRequestConfig } from '../utils/requestUtils'

const HTTP = axios.create()

const setCredentials = (credentials: any) => {
  console.log(credentials)
}

const login = async (): Promise<User> => {
  const response = await HTTP.get(resolveUri() + '/users/me', getRequestConfig())
  console.log(response)
  return response.data
}

export default { login, setCredentials }
