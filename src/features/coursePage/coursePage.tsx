import React from 'react'
import { InitialState } from '../../types/InitialState'
import IdyllDocument from 'idyll-document'
import compiler, { Node } from 'idyll-compiler'
import Chapter from './components/Chapter'
export function coursePage(initialState: InitialState) {
  return (
    <div>
      <h1>Kurssisivu</h1>
      <IdyllDocument
        ast={compiler(initialState.courses[0].courseContent[0].content, {async: false}) as Node[]}
        components={{Chapter}}
      />
    </div>
  )
}

// <Navigation />
// <Hero />
// <Chapter header="Luonnolliset luvut ja kokonaisluvut (1.1 - 1.8)" text={text} />
