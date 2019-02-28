const fs = require('fs')
const uuidv1 = require('uuid/v1')
const path = require('path')

const createUids = path => {
  const end = path.substring(path.length - 3)

  if (end !== 'idl') {
    return false
  }

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

goThroughFiles = base => {
  fs.readdirSync(base).forEach(file => {
    file = path.resolve(base, file)
    fs.stat(file, (err, stat) => {
      if (stat && stat.isDirectory()) {
        goThroughFiles(file)
      } else {
        createUids(file)
      }
    })
  })
}

goThroughFiles(`${__dirname}/../content`)
