import { frontPage } from './features/frontpage/frontPage'
import { coursePage } from './features/coursePage/coursePage'
import { InitialState } from './types/InitialState'
import { Store, AnyAction } from 'redux'
import { changePage } from './reducers/actions/pageStateActions'
import Path from 'path-parser'

const routes: Array<{ path: Path, component: (initialState: InitialState) => JSX.Element }> = [
  {
    path: new Path('/'),
    component: frontPage
  },
  {
    path: new Path('/courses/:id'),
    component: coursePage
  }
]

export function getPage(path: string): { component: ((initialState: InitialState) => JSX.Element), pathParams: any } | undefined {
  const selectedRoute = routes
    .find(route => route.path.test(path) !== null)
  if (selectedRoute !== undefined) {
    return {
      component: selectedRoute.component,
      pathParams: selectedRoute.path.test(path)
    }
  }
  return
}

export function watchPageChanges(store: Store<{pageState: InitialState | null}, AnyAction>) {
  if (typeof window !== 'undefined') {
    window.onpopstate = (ev: PopStateEvent) => {
      store.dispatch(changePage(window.location.pathname))
    }
  }
}
