import fs from 'fs'
import { InitialState, Chapter } from '../types/InitialState'

interface ContentConfig {
  header: string
  chapters: Array<{ number: number; content: string }>
}


const contentConfig: ContentConfig = JSON.parse(fs.readFileSync('./content/content_config.json', 'utf8'))
// const idyllConfig: ContentConfig = JSON.parse(fs.readFileSync('./content/index.idl', 'utf-8'))

export function getIdyllContent(): InitialState {
  const content = fs.readFileSync('./content/index.idl', 'utf-8')
  console.log(content)
  return {
    courseHeaderMarkdown: content || '',
    chapters: []
  }
}

export function resolveInitialState(path: string): InitialState {
  const header = getCourseHeader()
  const chapters = getChapters()
  return {
    courseHeaderMarkdown: header || '',
    chapters,
    pageParams: {
      path
    }
  }
}

function getCourseHeader() {
  if (contentConfig.header) {
    return fs.readFileSync(contentConfig.header, 'utf8')
  }
  return ''
}

function getChapters(): Chapter[] {
  const arr: Chapter[] = []
  contentConfig.chapters.forEach(chapter => {
    arr.push({ content: fs.readFileSync(chapter.content, 'utf8') })
  })
  return arr
}
