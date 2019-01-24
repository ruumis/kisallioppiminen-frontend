import {frontPage} from './features/frontpage/frontPage'
import {coursePage} from './features/coursePage/coursePage'
import {InitialState} from './types/InitialState'

export const routes: {[index: string]: {component: (initialState: InitialState) => JSX.Element}} = {
  '/': {
    component: frontPage
  },
  '/course': {
    component: coursePage
  }
}
