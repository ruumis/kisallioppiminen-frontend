import React from 'react'
import { InitialState } from '../../types/InitialState'
import IdyllDocument from 'idyll-document'
import * as components from 'idyll-components'
import compiler, { Node } from 'idyll-compiler'
import Chapter from './components/Chapter'

export function coursePage(initialState: InitialState) {
  const availableComponents = {
    ...components,
    Chapter
  }

  const courseToRender = resolveCourse(initialState)

  // The nullcheck for the course before rendering the Idyll doc is shit
  // at the moment. I think this might fuck up server side rendering for idyll docs?
  return (
    <div>
      <h1>Kurssisivu</h1>
      {courseToRender && <IdyllDocument
        ast={compiler(courseToRender.courseContent[0].content, { async: false }) as Node[]}
        components={availableComponents}
      />}
    </div>
  )
}

function resolveCourse({ pageParams, courses }: InitialState) {
  const { pathParams } = pageParams
  if (pathParams.id) {
    return courses.find(({ id }) => id === pathParams.id)
  }
  return undefined
}
