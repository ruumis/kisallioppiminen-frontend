import axios from 'axios'
import { resolveUri } from '../utils/resolveUri'
import { getRequestConfig } from '../utils/requestUtils'

const baseUrl = resolveUri()

const HTTP = axios.create({
  withCredentials: true
})

const joinTeachingInstanceService = async (coursekey: string): Promise<any> => {
  console.log('MENEEEE')
  const response = await HTTP.patch(`${baseUrl}/teachinginstances/join`, { coursekey }, getRequestConfig())
  console.log(response)
  return response.data
}

const ownCourses = async (): Promise<any> => {
  const { data } = await HTTP.get(`${baseUrl}/users/courses`)
  console.log(data)
  return data
}

export default { joinTeachingInstanceService, ownCourses }
