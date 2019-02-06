import React from 'react'
import { InitialState, CoursePageState } from '../types/InitialState'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import { getPage, watchPageChanges } from '../routes'
import { Provider, connect } from 'react-redux'
import { initStore } from '../reducers/store'

export function createApp(initialState: {pageState: InitialState, coursePageState: CoursePageState}) {
  const store = initStore(initialState)
  watchPageChanges(store)

  const mapStateToProps = (state: { pageState: InitialState, coursePageState: CoursePageState }) => {
    return {initialState: state.pageState}
  }

  const app = (props: { initialState: InitialState }) => {
    const { initialState: state } = props
    const page = resolvePageToRender(state)
    return (
      <React.Fragment>
        <Navigation />
        {page}
        <Footer />
      </React.Fragment>
    )
  }

  const ConnectedApp = connect(
    mapStateToProps
  )(app)

  return (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  )
}

function resolvePageToRender(initialState: InitialState) {
  const { pageParams } = initialState
  const { path } = pageParams
  const page = getPage(path)
  if (page === undefined) {
    return <h1>404 Not found :(</h1>
  }

  initialState.pageParams.pathParams = page.pathParams

  return page.component()
}
