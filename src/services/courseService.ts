import axios from 'axios'
import { resolveUri } from '../utils/resolveUri'

const baseUrl = resolveUri()

const HTTP = axios.create({
  withCredentials: true
})

const joinCourse = async (courseKey: string): Promise<any> => {
  const response = await HTTP.put(`${baseUrl}/courses/${courseKey}`)
  console.log(response)
  return response.data
}

const ownCourses = async (): Promise<any> => {
  const { data } = await HTTP.get(`${baseUrl}/users/courses`)
  console.log(data)
  return data
}

const trafficlight = async (courseKey: string, UUID: string, status: string): Promise<any> => {
  const { data } = await HTTP.put(`${baseUrl}/trafficlights/${UUID}`, { courseKey, status }, getRequestConfig())
  console.log(data)
  return data
}

const getRequestConfig = () => {
  return {
    headers: {
      Authorization: `Bearer ${typeof window !== 'undefined' ? window.localStorage.getItem('ko_token') : ''}`
    }
  }
}

export default { joinCourse, ownCourses, trafficlight }
