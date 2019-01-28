import express from 'express'
import ReactServer from 'react-dom/server'

import {createApp} from '../features/application'
import {createTemplate} from './basePage'
import {readContent} from './initialStateResolver'

const PORT = process.env.PORT || 3000

const server = express()
server.use(express.static('dist'))

server.get('/', (req, res) => {
  const initialState = readContent()
  const body = ReactServer.renderToString(createApp(initialState))
  const template = createTemplate({
    title: 'Kisällioppiminen.fi',
    body,
    initialState: JSON.stringify(initialState)
  })

  res.send(template)
})

server.listen(PORT, () => {
  console.log('🚀  Server now listening on ', PORT)
})