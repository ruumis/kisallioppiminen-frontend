import ReactDOM from 'react-dom'
import {createApp} from './features/application'

const initialStateElem = document.getElementById('intial-state')

if (initialStateElem) {
  const app = createApp(JSON.parse(initialStateElem.innerText))
  ReactDOM.hydrate(
    app,
    document.getElementById('app')
  )
}
