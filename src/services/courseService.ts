import axios from 'axios'
import { resolveUri } from '../utils/resolveUri'
import { getRequestConfig } from '../utils/requestUtils'

const baseUrl = resolveUri()

const HTTP = axios.create({
  withCredentials: true
})

const joinTeachingInstance = async (courseKey: string): Promise<any> => {
  const response = await HTTP.post(`${baseUrl}/teachinginstances/join/${courseKey}`, { courseKey }, getRequestConfig())
  console.log(response)
  return response.data
}
const ownCourses = async (): Promise<any> => {
  const { data } = await HTTP.get(`${baseUrl}/users/courses`)
  console.log(data)
  return data
}

export default { joinTeachingInstance, ownCourses }
