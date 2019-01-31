export interface InitialState {
  courseHeaderMarkdown: string
  chapters: Chapter[]
  pageParams: PageParams
}

export interface Chapter {
  content: string
}

export interface PageParams {
  path: string
}
