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
  const {data} = await HTTP.get(`${baseUrl}/users/courses`)
  console.log(data)
  return data
}

export default { joinCourse, ownCourses }