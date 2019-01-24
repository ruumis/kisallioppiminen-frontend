import React from 'react'
import {InitialState} from '../types/InitialState'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import {routes} from '../routes'

export function createApp(initialState: InitialState) {

  return (
    <div>
      <Navigation />
      {resolvePageToRender(initialState)}
      <Footer />
    </div>
  )
}

function resolvePageToRender(initialState: InitialState) {
  const {pageParams} = initialState
  const {path} = pageParams
  if (routes[path] === undefined) {
    return (
      <h1>404 Not found :(</h1>
    )
  }

  return routes[path].component(initialState)
}
