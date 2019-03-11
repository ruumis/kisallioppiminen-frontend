import React from 'react'
import { mapChildren } from 'idyll-component-children'
import CourseMenu from './CourseMenu'

const CourseNumberer = (props: any) => {
  let count = -1
  const headers: string[] = []

  const arr2 = mapChildren(props.children, (c: any) => {
    if (c.type && c.type.name && c.type.name.toLowerCase() === 'connect') {
      count++
      const clone = React.cloneElement(c, {
        numeral: count,
        sectionId: count
      })

      headers.push(c.props.header)

      return clone
    }

    return c
  })

  return (
    <>
      <CourseMenu headers={headers} />
      <div>{arr2}</div>
    </>
  )
}

export default CourseNumberer
