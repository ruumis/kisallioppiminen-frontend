import ReactDOM from 'react-dom'
import {createApp} from './features/application'

const initialStateElement = document.getElementById('initial-state')
let app = null
if (initialStateElement) {
  app = createApp(initialStateElement.innerText)
}

ReactDOM.render(
  app,
  document.getElementById('app')
)
