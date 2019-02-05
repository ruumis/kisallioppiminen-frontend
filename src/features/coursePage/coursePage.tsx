import React,{useState} from 'react'
import { InitialState } from '../../types/InitialState'
import IdyllDocument from 'idyll-document'
import * as components from 'idyll-components'
import compiler, { Node } from 'idyll-compiler'
import Chapter from './components/Chapter'
<<<<<<< HEAD
import Section from './components/Section'
import ContainerWrapper from './components/ContainerWrapper'
=======
import Exercise from './components/Exercise'
import Answer from './components/Answer'
import Theorem from './components/Theorem'
import Definition from './components/Definition'
import Rationalization from './components/Rationalization'
>>>>>>> 2175db3b80fa54e97ac2489fb72f14da3a12fb7c

export function coursePage(initialState: InitialState) {
  const [coursePageTab, setCoursePageTab] = useState(1)
  const availableComponents = {
    ...components,
    Chapter,
<<<<<<< HEAD
    ContainerWrapper,
    Section
=======
    Exercise,
    Answer,
    Theorem,
    Rationalization,
    Definition
>>>>>>> 2175db3b80fa54e97ac2489fb72f14da3a12fb7c
  }

  const courseToRender = resolveCourse(initialState)

  // The nullcheck for the course before rendering the Idyll doc is shit
  // at the moment. I think this might fuck up server side rendering for idyll docs?
  return (
    <div className="course-container">
      <h1>Kurssisivu</h1>
      {courseToRender && <IdyllDocument ast={compiler(courseToRender.courseContent[0].content, { async: false }) as Node[]} components={availableComponents} />}
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
