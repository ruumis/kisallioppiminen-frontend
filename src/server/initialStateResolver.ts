import fs from 'fs'
import { InitialState, Course } from '../types/InitialState'

interface ContentConfig {
  courseName: string,
  quickLinks: string[],
  contentFiles: Array<{version: number, path: string}>
}

const contentConfig: ContentConfig[] = JSON.parse(fs.readFileSync('./content/content_config.json', 'utf8'))
// const idyllConfig: ContentConfig = JSON.parse(fs.readFileSync('./content/index.idl', 'utf-8'))

export function resolveInitialState(path: string): InitialState {
  const courses = getCourses()
  return {
    courses: courses || '',
    pageParams: {
      path,
      openedBoxes: {}
    }
  }
}

function getCourses(): Course[] {
  return contentConfig.map(({courseName, quickLinks, contentFiles}) => {
    const courseContent: Array<{version: number, content: string}> = contentFiles.map(({version, path}) => ({version, content: fs.readFileSync(path, 'utf8')}))
    return {
      courseName,
      quickLinks,
      courseContent
    }
  })
}
