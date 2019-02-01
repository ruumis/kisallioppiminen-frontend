import React, { Component } from 'react'
import Link from '../../components/Link'

interface Props {
  courseName: string,
  quickLinks: string[]
}

export default class Course extends Component<Props, any> {
  render() {
    const {courseName, quickLinks} = this.props
    return (
      <div className="course">
        <Link href="/course">
          <h2 className="course-title">{courseName}</h2>
        </Link>
        <ol className="course-parts">
          {createQuickLinks(quickLinks)}
        </ol>
      </div>
    )
  }
}

function createQuickLinks(links: string[]) {
  return links
    .map(link => (
      <li>
        <span className="course-content">{link}</span>
      </li>
    ))
}
