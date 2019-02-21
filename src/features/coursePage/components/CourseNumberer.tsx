import React from 'react'
import { mapChildren } from 'idyll-component-children'

const CourseNumberer = (props: any) => {
  let count = -1

  const arr2 = mapChildren(props.children, (c: any) => {
    if (c.type && c.type.name && c.type.name.toLowerCase() === 'connect') {
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
