import React from 'react'
import { InitialState } from '../../types/InitialState'
export function coursePage(initialState: InitialState) {
  return (
    <div>
      <h1>Kurssisivu</h1>
      {initialState.courseHeaderMarkdown}
    </div>
  )
}

// <Navigation />
// <Hero />
// <Chapter header="Luonnolliset luvut ja kokonaisluvut (1.1 - 1.8)" text={text} />
