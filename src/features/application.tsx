import React from 'react'
import { InitialState } from '../types/InitialState'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import { getPage, watchPageChanges } from '../routes'
import { Provider, connect } from 'react-redux'
import { initStore } from '../reducers/store'
import { changePage } from '../reducers/actions/pageStateActions'

export function createApp(initialState: InitialState) {
  const mapStateToProps = (state: { pageState: InitialState }) => ({
    initialState: state.pageState
  })
  const mapDispatchToProps = {
    changePage
  }

  const app = (props: { initialState: InitialState }) => {
    const { initialState: state } = props
    return (
      <React.Fragment>
        <Navigation />
        {resolvePageToRender(state)}
        <Footer />
      </React.Fragment>
    )
  }

  const ConnectedApp = connect(
    mapStateToProps,
    mapDispatchToProps
  )(app)

  const store = initStore(initialState)
  watchPageChanges(store)

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

  return page(initialState)
}
