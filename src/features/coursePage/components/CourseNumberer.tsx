import React from 'react'
import { filterChildren, mapChildren } from 'idyll-component-children'

const CourseNumberer = (props: any) => {
  const arr = filterChildren(props.children, (c: any) => {
    return true
  })

  let count = 0

  const arr2 = mapChildren(arr, (c: any) => {
    if (c.type.name && c.type.name.toLowerCase() === 'connect') {
      count++
      const clone = React.cloneElement(c, {
        numeral: count,
        sectionId: count
      })

      return clone
    }

    return c
  })

  return <div>{arr2}</div>
}

export default CourseNumberer
