import express from 'express'
import ReactServer from 'react-dom/server'

import {createApp} from '../features/application'
import {createTemplate} from './basePage'
import { readMdFile } from './initialStateResolver'

const PORT = process.env.PORT || 3000

const server = express()
server.use(express.static('dist'))

server.get('/', (req, res) => {
  const md = readMdFile()
  const body = ReactServer.renderToString(createApp(md))
  const template = createTemplate({
    title: 'Kisällioppiminen.fi',
    body,
    initialState: md
  })

  res.send(template)
})

server.listen(PORT, () => {
  console.log('🚀  Server now listening on ', PORT)
})
