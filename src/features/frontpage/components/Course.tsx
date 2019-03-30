import React, { useState } from 'react'
import Link from '../../baseComponents/Link'

interface CourseInfo {
  id: string
  courseName: string
  quickLinks: string[]
  versions: Array<{ version: string; content: string }>
}

export default function Course(courseInfo: CourseInfo) {

  const { id, courseName, quickLinks, versions } = courseInfo
  const [selectedVersion, setSelectedVersion] = useState(versions[0].version)

  const handleSelectorChange = (selection: string) => {
    setSelectedVersion(selection)
  }

  return (
    <div className="course">
      <Link href={`/courses/${id}/version/${selectedVersion}/tab/0`}>
        <h2 className="course-title">{courseName}</h2>
      </Link>
      <select className="course-selector-box" defaultValue={versions[0].version} onChange={e => handleSelectorChange(e.target.value)}>
        {addVersions(versions)}
      </select>
      <ol className="course-parts">{createQuickLinks(quickLinks, id, selectedVersion)}</ol>
    </div>
  )
}

const addVersions = (versions: Array<{ version: string; content: string }>) =>
  versions.map(vrsn =>
    <option key={vrsn.version}>{vrsn.version}</option>)

function createQuickLinks(links: string[], courseId: string, selectedVersion: string) {
  return links.map((link, index) => (
    <li key={index}>
      <Link href={`/courses/${courseId}/version/${selectedVersion}/tab/${index + 1}`}>
        <div className="course-content">{link}</div>
      </Link>
    </li>
  ))
}
