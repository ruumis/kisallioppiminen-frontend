import fs from 'fs'
import { InitialState, Course, CoursePageState, ExercisesState } from '../types/InitialState'

interface ContentConfig {
  id: string
  courseName: string
  quickLinks: string[]
  contentFiles: Array<{ version: string; path: string }>
}

const contentConfig: ContentConfig[] = JSON.parse(fs.readFileSync('./content/content_config.json', 'utf8'))
// const idyllConfig: ContentConfig = JSON.parse(fs.readFileSync('./content/index.idl', 'utf-8'))

export function resolveInitialState(path: string): { pageState: InitialState; coursePageState: CoursePageState; exercises: ExercisesState } {
  const courses = getCourses()

  const idToNumber: { [index: string]: string } = {}
  courses.forEach(c =>
    c.courseContent.forEach(cv => {
      let sectionCount = -1
      let exerciseCount = 0
      const quickLinks: string[] = []
      const contentByWord = cv.content
        .replace('\n', ' ')
        .replace('[', ' [')
        .split(' ')
      contentByWord.forEach(word => {
        if (word.includes('[CourseSection')) {
          sectionCount++
          exerciseCount = 0
        }

        if (word.includes('UUID:')) {
          exerciseCount++
          const UUID = word.substring(6, word.length - 1)
          idToNumber[UUID] = `${sectionCount}.${exerciseCount}`
        }
      })
    })
  )
  console.log(idToNumber)
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
    },
    exercises: {
      idToNumber
    }
  }
}

function getCourses(): Course[] {
  return contentConfig.map(({ id, courseName, quickLinks, contentFiles }) => {
    const courseContent: Array<{ version: string; content: string; quickLinks: string[] }> = contentFiles.map(({ version, path }) => ({
      version,
      content: fs.readFileSync(path, 'utf8'),
      quickLinks: []
    }))
    return {
      id,
      courseName,
      quickLinks,
      courseContent
    }
  })
}

function resolveCourseTabFromPath(path: string) {
  return path.split('tab')[1]
}
