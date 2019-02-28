const fs = require('fs')
const uuidv1 = require('uuid/v1')

const createUids = path => {
  const text = fs.readFileSync(path).toString()
  const textByLine = text.split('\n')
  const uidTextByLine = textByLine.map(line => {
    if (line.includes('[Exercise') && !line.includes('UID:')) {
      var words = line.split(' ')
      const index = words.indexOf('[Exercise')
      words[index] = `${words[index]} UID:${uuidv1()}`
      return words.join(' ')
    }
    return line
  })

  const uidText = uidTextByLine.join('\n')
  fs.writeFile(path, uidText, err => {
    if (err) return console.log(err)
  })
}

createUids(process.argv[2])
