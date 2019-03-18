import axios from 'axios'
import { resolveUri } from '../utils/resolveUri'

const baseUrl = resolveUri()

const HTTP = axios.create({
  withCredentials: true
})

const joinTeachingInstance = async (courseKey: string): Promise<any> => {
  console.log(courseKey)
  // const response = await HTTP.put(`${baseUrl}/courses/${courseKey}`)
  // const response = await HTTP.put('localhost:8080/courses/kuuba')
  // console.log(response)
  // return response.data
}

const ownCourses = async (): Promise<any> => {
  const { data } = await HTTP.get(`${baseUrl}/users/courses`)
  console.log(data)
  return data
}

export default { joinTeachingInstance, ownCourses }
