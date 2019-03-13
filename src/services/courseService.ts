import axios from 'axios'

const baseUrl = 'http://localhost:8080'

const HTTP = axios.create({
  withCredentials: true
})

const joinCourse = async (courseKey: string): Promise<any> => {
  const response = await HTTP.post(`${baseUrl}/courses/join`, courseKey)
  console.log(response)
  return response.data
}

export default { joinCourse }
