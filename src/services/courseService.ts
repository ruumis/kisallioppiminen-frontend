import axios from 'axios'

const baseUrl = 'http://localhost:8080'

const HTTP = axios.create({
  withCredentials: true
})

const joinCourse = async (courseKey: string): Promise<any> => {
  const response = await HTTP.put(`${baseUrl}/courses/${courseKey}`)
  console.log(response)
  return response.data
}

const ownCourses = async (): Promise<any> => {
  const response = await HTTP.get(`${baseUrl}/users/courses`)
  console.log(response)
  return response.data
}

export default { joinCourse, ownCourses }
