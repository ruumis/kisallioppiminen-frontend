import axios from 'axios'
import { resolveUri } from '../utils/resolveUri'
import { getRequestConfig } from '../utils/requestUtils'
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
  const { data } = await HTTP.get(`${baseUrl}/teachinginstances?teacher=false`, getRequestConfig())
  console.log(data)
  return data
}

const createTeachingInstance = async (instance: TeachingInstance): Promise<any> => {
  const response = await HTTP.post(`${baseUrl}/teachinginstances`, instance)
  console.log(response)
  return response.data
}

export default { joinTeachingInstanceService, ownCourses, createTeachingInstance }
