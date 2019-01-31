export interface InitialState {
  courses: Course[]
  pageParams: PageParams
}

export interface PageParams {
  path: string
}

export interface Course {
  courseName: string,
  quickLinks: string[],
  courseContent: Array<{version: number, content: string}>
}
