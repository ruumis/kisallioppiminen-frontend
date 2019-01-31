import { frontPage } from './features/frontpage/frontPage'
import { coursePage } from './features/coursePage/coursePage'
import { InitialState } from './types/InitialState'
import { Store, AnyAction } from 'redux'
import { changePage } from './reducers/actions/pageStateActions'

const routes: { [index: string]: { component: (initialState: InitialState) => JSX.Element }} = {
  '/': {
    component: frontPage
  },
  '/course': {
    component: coursePage
  }
}

export function getPage(path: string): (initialState: InitialState) => JSX.Element {
  return routes[path].component
}

export function watchPageChanges(store: Store<{pageState: InitialState | null}, AnyAction>) {
  if (typeof window !== 'undefined') {
    window.onpopstate = (ev: PopStateEvent) => {
      store.dispatch(changePage(window.location.pathname))
    }
  }
}
