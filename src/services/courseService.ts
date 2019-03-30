import axios from 'axios'
import { resolveUri } from '../utils/resolveUri'
import { TeachingInstance } from '../types/jsontypes'

const baseUrl = resolveUri()

const HTTP = axios.create({
  withCredentials: true
})

const joinTeachingInstanceService = async (coursekey: string): Promise<any> => {
  const response = await HTTP.patch(`${baseUrl}/teachinginstances`, { coursekey }, getRequestConfig())
  console.log(response)
  return response.data
}

const ownCourses = async (): Promise<any> => {
  const { data } = await HTTP.get(`${baseUrl}/teachinginstances?teacher=false`)
  console.log(data)
  return data
}

const teacherCourses = async (): Promise<any> => {
  const { data } = await HTTP.get(`${baseUrl}/teachinginstances?teacher=true`)
  console.log(data)
  return data
}

<<<<<<< HEAD
const createTeachingInstance = async (instance: TeachingInstance): Promise<any> => {
  const response = await HTTP.post(`${baseUrl}/teachinginstances`, instance)
  console.log(response)
  return response.data
}

=======
>>>>>>> 1c10ee868519c26feb98e3f1ceaf5a6bea30392b
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

<<<<<<< HEAD
export default { joinTeachingInstanceService, createTeachingInstance, ownCourses, trafficlight, teacherCourses }
=======
export default { joinCourse, ownCourses, trafficlight, teacherCourses }
>>>>>>> 1c10ee868519c26feb98e3f1ceaf5a6bea30392b
