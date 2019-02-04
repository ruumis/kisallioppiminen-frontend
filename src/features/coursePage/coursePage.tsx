import React from 'react'
import { InitialState } from '../../types/InitialState'
import Chapter from './components/Chapter'
import Theorem from './components/Theorem'
import Exercise from './components/Exercise'
import Answer from './components/Answer'
import Definition from './components/Definition'

export function coursePage(initialState: InitialState) {
  return (
    <div className="app">
      <h1>Kurssisivu</h1>
      {initialState.courseHeaderMarkdown}
    </div>
  )
}
