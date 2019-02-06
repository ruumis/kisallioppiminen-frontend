import React from 'react'
import { InitialState, Course, CoursePageState } from '../../types/InitialState'
import IdyllDocument from 'idyll-document'
import * as components from 'idyll-components'
import compiler, { Node } from 'idyll-compiler'
import ContainerWrapper from './components/ContainerWrapper'
import Section from './components/Section'
import Chapter from './components/Chapter'
import CourseVersionSelector from './components/CourseVersionSelector'
import { connect } from 'react-redux'
import Exercise from './components/Exercise'
import Answer from './components/Answer'
import Theorem from './components/Theorem'
import Rationalization from './components/Rationalization'
import Definition from './components/Definition'

export function coursePage() {
  const availableComponents = {
    ...components,
    ContainerWrapper,
    Section,
    Chapter,
    Exercise,
    Answer,
    Theorem,
    Rationalization,
    Definition
  }

  const mapStateToProps = (state: { pageState: InitialState, coursePageState: CoursePageState }) => ({
    pageState: state.pageState, coursePageState: state.coursePageState
  })

  const coursePageApp = (props: {pageState: InitialState, coursePageState: CoursePageState}) => {
    const {pageState, coursePageState} = props

    const courseToRender = resolveCourse(pageState)
    const courseMaterialVersion = resolveCourseVersion(coursePageState, courseToRender)
    return (
      <div>
        <h1>Kurssisivu</h1>
        <CourseVersionSelector versions={courseToRender !== undefined ? courseToRender.courseContent.map(c => c.version) : []} />
        {
          typeof window !== 'undefined' ?
          <IdyllDocument markup={courseMaterialVersion ? courseMaterialVersion.content : ''} components={availableComponents}/> :
          <IdyllDocument ast={compiler(courseMaterialVersion ? courseMaterialVersion.content : '', {async: false}) as Node[]} components={availableComponents}/>
        }
      </div>
    )
  }

  const ConnectedCoursePage = connect(mapStateToProps)(coursePageApp)

  return <ConnectedCoursePage />
}

function resolveCourse({ pageParams, courses }: InitialState) {
  const { pathParams } = pageParams
  if (pathParams.id) {
    return courses.find(({ id }) => id === pathParams.id)
  }
  return undefined
}

function resolveCourseVersion({selectedCourseVersion}: CoursePageState, course?: Course) {
  return course ? course
  .courseContent
  .find(content => {
    return content.version === Number(selectedCourseVersion)
  }) || course.courseContent[0] : undefined

}

// <Navigation />
// <Hero />
// <Chapter header="Luonnolliset luvut ja kokonaisluvut (1.1 - 1.8)" text={text} />
