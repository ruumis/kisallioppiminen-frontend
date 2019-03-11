import { frontPage } from './features/frontpage/frontPage'
import { coursePage } from './features/coursePage/coursePage'
import { infoPage } from './features/infoPage/infoPage'
import { courseAdministrationPage } from './features/courseAdministrationPage/courseAdministrationPage'
import { InitialState } from './types/InitialState'
import { Store, AnyAction } from 'redux'
import { changePage } from './reducers/actions/pageStateActions'
import Path from 'path-parser'

const routes: Array<{ path: Path; component: () => JSX.Element; pageName: string }> = [
  {
    path: new Path('/'),
    component: frontPage,
    pageName: 'Etusivu'
  },
  {
    path: new Path('/courses/:id/tab/:tabId'),
    component: coursePage,
    pageName: 'Kurssisivu'
  },
  {
    path: new Path('/tietoa'),
    component: infoPage,
    pageName: 'Tietoa'
  },
  {
    path: new Path('/courseAdmin'),
    component: courseAdministrationPage,
    pageName: 'Kurssihallinta'
  }
// courseAdmin sivu yllä ei ole lopullinen reitti!!
]


export function getPage(currentPath: string): { component: () => JSX.Element; pathParams: any; pageName: string } | undefined {
  const selectedRoute = routes.find(route => route.path.test(currentPath) !== null)
  if (selectedRoute !== undefined) {
    const { component, path, pageName } = selectedRoute
    return {
      component,
      pathParams: path.test(currentPath),
      pageName
    }
  }
  return undefined
}

export function watchPageChanges(store: Store<{ pageState: InitialState | null }, AnyAction>) {
  if (typeof window !== 'undefined') {
    window.onpopstate = (ev: PopStateEvent) => {
      store.dispatch(changePage(window.location.pathname))
    }
  }
}
