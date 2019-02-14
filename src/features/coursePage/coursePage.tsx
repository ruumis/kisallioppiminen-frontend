import React from 'react'
import { InitialState, Course, CoursePageState } from '../../types/InitialState'
import IdyllDocument from 'idyll-document'
import * as components from 'idyll-components'
import compiler, { Node } from 'idyll-compiler'
import CourseMenu from './components/CourseMenu'
import CourseTab from './components/CourseTab'
import CourseSection from './components/CourseSection'
import Chapter from './components/Chapter'
import CourseVersionSelector from './components/CourseVersionSelector'
import { connect } from 'react-redux'
import Exercise from './components/Exercise'
import Answer from './components/Answer'
import Theorem from './components/Theorem'
import Rationalization from './components/Rationalization'
import Definition from './components/Definition'
import MaterialPicture from './components/MaterialPicture'
import NavBottom from '../baseComponents/NavBottom'

export function coursePage() {
  const availableComponents = {
    ...components,
    CourseMenu,
    CourseTab,
    CourseSection,
    Chapter,
    Exercise,
    Answer,
    Theorem,
    Rationalization,
    Definition,
    MaterialPicture
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
<<<<<<< HEAD
<<<<<<< 70b4eb7e2543ecbd1162244756ba19572e6b0b9c
          <IdyllDocument ast={compiler(courseMaterialVersion ? courseMaterialVersion.content : '', { async: false }) as Node[]} components={availableComponents} />
        )}
        <NavBottom />
=======
            <IdyllDocument ast={compiler(courseMaterialVersion ? courseMaterialVersion.content : '', { async: false }) as Node[]} components={availableComponents} />
          )}
>>>>>>> Course version is a string
=======
            <IdyllDocument ast={compiler(courseMaterialVersion ? courseMaterialVersion.content : '', { async: false }) as Node[]} components={availableComponents} />
          )}
>>>>>>> f4747a75742880a551f381205671785363124309
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
      return content.version === selectedCourseVersion
    }) || course.courseContent[0]
    : undefined
}
