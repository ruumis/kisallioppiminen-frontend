import Bluebird from 'bluebird'
import oldfs from 'fs'
import { ContentConfig } from '../initialStateResolver'
const fs = Bluebird.promisifyAll(oldfs) as any

export function getCourses(contentConfig: ContentConfig[]) {
  return contentConfig.map(async ({ id, courseName, quickLinks, contentFiles }) => {
    const courseContent: Array<Promise<{ version: number; content: string }>> = contentFiles.map(async ({ version, path }) => ({ version, content: await fs.readFileAsync(path, 'utf8') }))
    return {
      id,
      courseName,
      quickLinks,
      courseContent: await Promise.all(courseContent)
    }
  })
}
