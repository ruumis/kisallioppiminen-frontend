import React from 'react'
import { selectCourseVersion as selectCourse } from '../../../reducers/actions/courseActions'
import { connect } from 'react-redux'

function CourseVersionSelector({versions, selectCourseVersion}: {versions: number[], selectCourseVersion?: typeof selectCourse}) {
  // Option key should have better value?
  return (
    <div>
      <p>Valitse kurssin versio:</p>
      <select className="course-selector-box" onChange={e => handleOnChange(e, selectCourseVersion)}>
        {versions.map(v => <option key={v.toString()}>{v}</option>)}
      </select>
    </div>
  )
}

function handleOnChange(e: any, hook?: typeof selectCourse) {
  if (e.target && hook) { // Lol wtf fix pls
    hook(e.target.value)
  }
}

const mapStateToProps = () => ({})
const mapDispatchToProps = {
  selectCourseVersion: selectCourse
}

const ConnectedCourseVersionSelector = connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseVersionSelector)

export default ConnectedCourseVersionSelector
