import React, { Component } from 'react'
import Link from '../../baseComponents/Link'

interface Props {
  id: string
  courseName: string
  quickLinks: string[]
  version: string
}

export default class Course extends Component<Props, any> {
  render() {
    const { id, courseName, quickLinks, version } = this.props
    return (
      <div className="course">
        <Link href={`/courses/${id}/tab/0`}>
          <h2 className="course-title">{courseName}</h2>
        </Link>
        <p className="course-version">{version}</p>
        <ol className="course-parts">{createQuickLinks(quickLinks, id)}</ol>
      </div>
    )
  }
}

function createQuickLinks(links: string[], courseId: string) {
  return links.map((link, index) => (
    <li key={index}>
      <Link href={`/courses/${courseId}/tab/${index + 1}`}>
        <div className="course-content">{link}</div>
      </Link>
    </li>
  ))
}
