import React from 'react'
import { InitialState } from '../../types/InitialState'
import IdyllDocument from 'idyll-document'
import * as components from 'idyll-components'
import compiler, { Node } from 'idyll-compiler'
import Chapter from './components/Chapter'
import Test from './components/Test'

export function coursePage(initialState: InitialState) {
  const availableComponents = {
    ...components,
    Chapter,
    Test
  }
  // console.log('-------------------')
  // console.log(initialState.courses[0].courseContent[0].content)
  // console.log('-------------------')
  return (
    <div>
      <h1>Kurssisivu</h1>
      <IdyllDocument
        ast={compiler(initialState.courses[0].courseContent[0].content, {async: false}) as Node[]}
        components={availableComponents}
      />
    </div>
  )
}

function resolveCourse({pageParams, courses}: InitialState) {
  const {pathParams} = pageParams
  if (pathParams.id) {
    return courses.find(({id}) => id === pathParams.id)
  }
  return undefined
}
