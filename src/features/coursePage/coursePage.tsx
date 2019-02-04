import React from 'react'
import { InitialState } from '../../types/InitialState'

export function coursePage(initialState: InitialState) {
  return (
    <div className="app">
      <h1>Kurssisivu</h1>
      {initialState.courseHeaderMarkdown}
    </div>
  )
}
