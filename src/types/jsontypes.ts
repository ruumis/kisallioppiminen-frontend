export interface Scoreboard {
  students: Student[]
}

export interface Student {
  user: string
  exercises: Array<{ id: string; status: string }>
}
