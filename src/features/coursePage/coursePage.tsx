import React from 'react'
import Header from './components/Header'
import Course from './components/Course'
import {InitialState} from '../../types/InitialState'

export function coursePage(initialState: InitialState) {
  return (
    <div className="App">
      <Header />
      <Course initialState={initialState} />
    </div>
  )
}
