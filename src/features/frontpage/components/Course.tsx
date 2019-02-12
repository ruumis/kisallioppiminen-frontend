import React, { Component } from 'react'
import Link from '../../baseComponents/Link'

interface Props {
  id: string
  courseName: string
  quickLinks: string[]
  version: number
}

export default class Course extends Component<Props, any> {
  render() {
    const { id, courseName, quickLinks, version } = this.props
    return (
      <div className="course">
        <Link href={`/courses/${id}/tab/0`}>
          <h2 className="course-title">{courseName}</h2>
        </Link>
        <span className="course-version">{version}</span>
        <ol className="course-parts">{createQuickLinks(quickLinks, id)}</ol>
      </div>
    )
  }
}

function createQuickLinks(links: string[], courseId: string) {
  return links.map((link, index) => (
    <li key={index}>
      <Link href={`/courses/${courseId}/tab/${index}`}>
        <div className="course-content">
          {link}
        </div>
      </Link>
    </li>
  ))
}
