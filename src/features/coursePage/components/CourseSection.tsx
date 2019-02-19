import React from 'react'
import { InitialState, CoursePageState } from '../../../types/InitialState'
import { connect } from 'react-redux'
import { filterChildren, mapChildren } from 'idyll-component-children'

const CourseSection = (props: { sectionId: number; courseTabId: number; children: any; numeral: number }) => {
  const arr = filterChildren(props.children, (c: any) => {
    return true
  })

  let count = 0
  const exCount = { number: 0 }

  const arr2 = mapChildren(arr, (c: any) => {
    if (c.type.name && c.type.name.toLowerCase() === 'chapter') {
      count++
      const clone = React.cloneElement(c, {
        digit: count,
        numeral: props.numeral,
        count: exCount
      })
      return clone
    }
    return c
  })

  return props.sectionId === props.courseTabId ? <div id="CourseSection">{arr2}</div> : <div style={{ display: 'none' }} />
}

const mapStateToProps = (state: { pageState: InitialState; coursePageState: CoursePageState }) => ({
  courseTabId: Number(state.pageState.pageParams.pathParams.tabId)
})

const ConnectedCourseSection = connect(mapStateToProps)(CourseSection)

export default ConnectedCourseSection
