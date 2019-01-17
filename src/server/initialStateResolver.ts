import fs from 'fs'

export const readMdFile = () => {
    return fs.readFileSync('./content/may1-1.md', 'utf-8')
}
