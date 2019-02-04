import React from 'react'
import { InitialState } from '../../types/InitialState'
import Chapter from './components/Chapter'
import Theorem from './components/Theorem'
import Exercise from './components/Exercise'
import Answer from './components/Answer'
import Definition from './components/Definition'

export function coursePage(initialState: InitialState) {
  return (
    <div>
      <Chapter header="lalala">
        asdads
        <Definition header="very defined">something nice</Definition>
        <Theorem header="teoreema">tekstiä</Theorem>
        <Exercise header="Teht 1">
          1. 1+1?
          <Answer>1. 2</Answer>
        </Exercise>
        <Exercise header="Teht 2" open={true}>
          1. 3*2?
        </Exercise>
      </Chapter>
      <h1>Kurssisivu</h1>
      {initialState.courseHeaderMarkdown}
    </div>
  )
}
