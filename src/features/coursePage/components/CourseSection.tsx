import React from 'react'
import { InitialState, CoursePageState, User } from '../../../types/InitialState'
import { connect } from 'react-redux'
import { mapChildren } from 'idyll-component-children'
import { pageStateReducer } from '../../../reducers/pageStateReducer'

const CourseSection = (props: {
  sectionId: number
  courseTabId: number
  children: any
  numeral: number
  user: User | null
  coursePageState: CoursePageState
  pageState: InitialState
}) => {
  const exCount = { number: 0 }
  const showTrafficLight = () => {
    const ownCourses = props.coursePageState.ownCourses
    const user = props.user
    const courseId = props.pageState.pageParams.pathParams.id
    const courseVersion = props.pageState.pageParams.pathParams.version
    const allCourses = props.pageState.courses
    const courseName = allCourses.filter(c => c.id === courseId)[0].courseName
    const course = ownCourses.filter(c => c.name === courseName && c.version === courseVersion)
    console.log('etsitään versio', courseVersion)
    if (course.length === 0 || !user) {
      return null
    } else {
      return course[0].coursekey
    }
  }
  const arr2 = mapChildren(props.children, (c: any) => {
    if (c.type && c.type.name && c.type.name.toLowerCase() === 'chapter') {
      const clone = React.cloneElement(c, {
        numeral: props.numeral,
        count: exCount,
        user: props.user,
        ownCourses: props.coursePageState.ownCourses,
        coursekey: showTrafficLight()
      })
      return clone
    }
    return c
  })

  return props.sectionId === props.courseTabId ? <div id="CourseSection">{arr2}</div> : <div style={{ display: 'none' }} />
}

const mapStateToProps = (state: { pageState: InitialState; coursePageState: CoursePageState; user: User | null }) => ({
  courseTabId: Number(state.pageState.pageParams.pathParams.tabId),
  coursePageState: state.coursePageState,
  pageState: state.pageState
})

const ConnectedCourseSection = connect(mapStateToProps)(CourseSection)

export default ConnectedCourseSection
