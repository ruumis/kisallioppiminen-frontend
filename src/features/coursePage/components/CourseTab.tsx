import React from 'react'
import Link from '../../baseComponents/Link'
import { connect } from 'react-redux'
import { InitialState, CoursePageState } from '../../../types/InitialState'

interface Props {
  courseTabId: number
  tabId: number
  header: JSX.Element | string
  courseId: number
  courseVersion: string
}

const CourseTab = ({ tabId, courseTabId, header, courseId, courseVersion }: Props) => {
  return (
    <Link href={`/courses/${courseId}/version/${courseVersion}/tab/${tabId}`}>
      <div className={courseTabId !== tabId ? 'section' : 'section-active'}>
        {header}
      </div>
    </Link>
  )
}

const mapStateToProps = (state: { pageState: InitialState; coursePageState: CoursePageState }) => ({
  courseTabId: Number(state.pageState.pageParams.pathParams.tabId),
  courseId: state.pageState.pageParams.pathParams.id,
  courseVersion: state.pageState.pageParams.pathParams.version
})

const ConnectedCoursTab = connect(
  mapStateToProps
)(CourseTab)

export default ConnectedCoursTab
