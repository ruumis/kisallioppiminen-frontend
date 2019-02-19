import React from 'react'
import { filterChildren, mapChildren } from 'idyll-component-children'

const CourseMenu = (props: any) => {
  const arr = filterChildren(props.children, (c: any) => {
    return true
  })

  let count = 0

  const arr2 = mapChildren(arr, (c: any) => {
    if (c.type.name && c.type.name.toLowerCase() === 'connect') {
      count++
      const clone = React.cloneElement(c, {
        tabId: count
      })

      return clone
    }

    return c
  })

  return <div className="containerwrapper">{arr2}</div>
}

export default CourseMenu
