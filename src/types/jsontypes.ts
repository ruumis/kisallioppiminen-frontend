export interface Scoreboard {
  students: Student[]
}

export interface Student {
  user: string
  exercises: Array<{ id: string; status: string }>
}

export interface UserCourse {
  name: string
  coursekey: string
  id: number
  html_id: string
  startdate: string
  enddate: string
  students: Student[]
}

export interface TeachingInstance {
  coursekey: string
  name: string
  startdate: string
  enddate: string
  coursematerial_name: string
  coursematerial_version: string
}
