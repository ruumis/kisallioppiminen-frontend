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
  id: string
  version: string
  startdate: string
  enddate: string
  students: Student[]
  exerciseNumbers: string[]
}
