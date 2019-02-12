import fs from 'fs'
import { InitialState, Course, CoursePageState } from '../types/InitialState'
import { getCourses } from './services/contentService'

export interface ContentConfig {
  id: string
  courseName: string
  quickLinks: string[]
  contentFiles: Array<{ version: number; path: string }>
}

const contentConfig: ContentConfig[] = JSON.parse(fs.readFileSync('./content/content_config.json', 'utf8'))
// const idyllConfig: ContentConfig = JSON.parse(fs.readFileSync('./content/index.idl', 'utf-8'))

export async function resolveInitialState(path: string): Promise<{ pageState: InitialState; coursePageState: CoursePageState }> {
  const courses = await Promise.all(getCourses(contentConfig))
  return {
    pageState: {
      courses: courses || '',
      pageParams: {
        path,
        pathParams: {}
      }
    },
    coursePageState: {
      selectedCourseVersion: null
    }
  }
}