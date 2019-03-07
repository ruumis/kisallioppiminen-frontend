import React from 'react'
import Link from '../../baseComponents/Link'
import { connect } from 'react-redux'
import { InitialState, CoursePageState } from '../../../types/InitialState'

interface CourseInfo {
  id: string
  courseName: string
  quickLinks: string[]
  versions: Array<{ version: string; content: string }>
}

export default function Course(courseInfo: CourseInfo) {

  const mapStateToProps = (state: { pageState: InitialState; coursePageState: CoursePageState }) => ({
    pageState: state.pageState,
    coursePageState: state.coursePageState
  })

  const courseObjectApp = (props: { pageState: InitialState; coursePageState: CoursePageState }) => {

    const { id, courseName, quickLinks, versions } = courseInfo
    const { pageState, coursePageState } = props
    let selectedVersion = versions[0].version
    const versionToRender = resolveVersion(coursePageState)

    const handleSelectorChange = (e: any) => {
      console.log(e.target.value)
      console.log("Ennen: ", selectedVersion)
      selectedVersion = e.target.value
      console.log("Jälkeen: ", selectedVersion)

    }

    return (
      <div className="course">
        <Link href={`/courses/${id}/version/${selectedVersion}/tab/0`}>
          <h2 className="course-title">{courseName}</h2>
        </Link>
        <select className="course-selector-box" defaultValue={versions[0].version} onChange={e => handleSelectorChange(e)}>
          {addVersions(versions)}
        </select>
        <ol className="course-parts">{createQuickLinks(quickLinks, id)}</ol>
      </div>
    )
  }

  const ConnectedCourse = connect(mapStateToProps)(courseObjectApp)

  return <ConnectedCourse />
}

function resolveVersion(pageState: CoursePageState) {
  console.log(pageState)
}

const addVersions = (versions: Array<{ version: string; content: string }>) =>
  versions.map(vrsn =>
    <option key={vrsn.version}>{vrsn.version}</option>)

function createQuickLinks(links: string[], courseId: string) {
  return links.map((link, index) => (
    <li key={index}>
      <Link href={`/courses/${courseId}/tab/${index + 1}`}>
        <div className="course-content">{link}</div>
      </Link>
    </li>
  ))
}
