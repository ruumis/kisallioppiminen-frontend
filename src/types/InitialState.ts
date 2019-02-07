export interface InitialState {
  courses: Course[]
  pageParams: PageParams
}

export interface PageParams {
  path: string,
  pathParams: any // No smart way of typifying these, so let's just got with any
}

export interface Course {
  id: string,
  courseName: string,
  quickLinks: string[],
  courseContent: Array<{version: number, content: string}>
}

export interface CoursePageState {
  selectedCourseVersion: number | null
}
