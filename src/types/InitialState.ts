export interface InitialState {
  courses: Course[]
  pageParams: PageParams
}

export interface PageParams {
  path: string,
  openedBoxes: {[index: string]: boolean}
}

export interface Course {
  courseName: string,
  quickLinks: string[],
  courseContent: Array<{version: number, content: string}>
}
