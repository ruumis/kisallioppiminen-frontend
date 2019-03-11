import React from 'react'
import { mapChildren } from 'idyll-component-children'
import CourseTab from './CourseTab'

const CourseMenu = (props: { headers: string[] }) => {
  const { headers } = props
  let count = -1
  /* const arr2 = mapChildren(props.children, (c: any) => {
    if (c.type && c.type.name && c.type.name.toLowerCase() === 'connect') {
      count++
      const clone = React.cloneElement(c, {
        header: count === 0 ? c.props.header : `${count}. ${c.props.header}`,
        tabId: count
      })

      return clone
    }

    return c
  }) */
  const courseTabs = (hs: string[]) =>
    hs.map(h => {
      count++
      return count === 0 ? <CourseTab key={h} header={h} tabId={count} /> : <CourseTab key={h} header={`${count}. ${h}`} tabId={count} />
    })

  return <div className="containerwrapper">{courseTabs(headers)}</div>
}

export default CourseMenu
