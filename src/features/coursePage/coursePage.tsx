import React from 'react'
import { InitialState, Course, CoursePageState } from '../../types/InitialState'
import IdyllDocument from 'idyll-document'
import * as components from 'idyll-components'
import compiler, { Node } from 'idyll-compiler'
import CourseMenu from './components/CourseMenu'
import CourseTab from './components/CourseTab'
import CourseNumberer from './components/CourseNumberer'
import CourseSection from './components/CourseSection'
import Chapter from './components/Chapter'
import CourseVersionSelector from './components/CourseVersionSelector'
import { connect } from 'react-redux'
import Exercise from './components/Exercise'
import Answer from './components/Answer'
import Theorem from './components/Theorem'
import Proof from './components/Proof'
import Definition from './components/Definition'
import Picture from './components/Picture'
import Math from './components/Math'

export function coursePage() {
  const availableComponents = {
    ...components,
    CourseNumberer,
    CourseMenu,
    CourseTab,
    CourseSection,
    Chapter,
    Exercise,
    Answer,
    Theorem,
    Proof,
    Definition,
    Picture,
    Math
  }

  const mapStateToProps = (state: { pageState: InitialState; coursePageState: CoursePageState }) => ({
    pageState: state.pageState,
    coursePageState: state.coursePageState
  })

  const coursePageApp = (props: { pageState: InitialState; coursePageState: CoursePageState }) => {
    const { pageState, coursePageState } = props

    const courseToRender = resolveCourse(pageState)
    const courseMaterialVersion = resolveCourseVersion(coursePageState, courseToRender)

    return (
      <div className="coursePageContainer">
        <div className="courseVersionSelectorContainer">
          <CourseVersionSelector versions={courseToRender !== undefined ? courseToRender.courseContent.map(c => c.version) : []} />
        </div>
        {typeof window !== 'undefined' ? (
          <IdyllDocument markup={courseMaterialVersion ? courseMaterialVersion.content : ''} components={availableComponents} />
        ) : (
          <IdyllDocument ast={compiler(courseMaterialVersion ? courseMaterialVersion.content : '', { async: false }) as Node[]} components={availableComponents} />
        )}
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

function resolveCourseVersion({ selectedCourseVersion }: CoursePageState, course?: Course) {
  return course
    ? course.courseContent.find(content => {
        return String(content.version) === selectedCourseVersion
      }) || course.courseContent[0]
    : undefined
}
