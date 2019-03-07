import React, { useState } from 'react'
import classnames from 'classnames'
import { mapChildren } from 'idyll-component-children'

interface Props {
  header: string
  content: string
  openedBoxes: { [index: string]: boolean }
}

const CourseWrapper = (props: any) => {
  const [open, setOpen] = useState(false)
  const contentClassname = classnames('chapter-content', { 'chapter-content-hidden': open !== true })
  const start = props.count ? props.count.number : 0

  const toggleVisibility = () => {
    if (props.count) {
      props.count.number = start
    }
    setOpen(!open)
  }

  let arr = props.children
  if (props.count && props.children && props.children[0].type) {
    arr = mapChildren(props.children, (c: any) => {
      return c
    })
  }

  return (
    <div>
      <div className="chapter">
        <label className="userCourseListPage-text">{props.header}</label>
        <button className="userCourseListPage-button">Poistu kurssilta</button>
        <label className="userCourseListPage-text">kurssiavain</label>
        <button className="userCourseListPage-close" onClick={toggleVisibility}>
          Sulje kappale
        </button>
      </div>
      <div className={contentClassname}>{arr}</div>
    </div>
  )
}

export default CourseWrapper
