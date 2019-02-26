export interface Scoreboard {
  students: Student[]
}

export interface Student {
  user: string
  exercises: Array<{ id: string; status: string }>
}

export interface Course {
  name: string
  courseKey: string
  id: number
  html_id: string
  startdate: string
  enddate: string
  students: Student[]
}
