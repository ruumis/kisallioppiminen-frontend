export interface Scoreboard {
  students: Student[]
}

export interface Student {
  user: string
  exercises: Exercise[]
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

export interface Exercise {
  id: string
  status: string
}
