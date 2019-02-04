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

  const courseToRender = resolveCourse(initialState)

  // The nullcheck for the course before rendering the Idyll doc is shit
  // at the moment. I think this might fuck up server side rendering for idyll docs?
  return (
    <div>
      <h1>Kurssisivu</h1>
      {courseToRender && <IdyllDocument
        ast={compiler(courseToRender.courseContent[0].content, {async: false}) as Node[]}
        components={availableComponents}
      />}
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
<<<<<<< HEAD
=======

// <Navigation />
// <Hero />
// <Chapter header="Luonnolliset luvut ja kokonaisluvut (1.1 - 1.8)" text={text} />
>>>>>>> ca9d0e4c39096cc43ff48a28422798fe2d9e73c3
