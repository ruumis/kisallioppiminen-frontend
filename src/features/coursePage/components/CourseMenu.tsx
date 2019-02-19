import React from 'react'
import { mapChildren } from 'idyll-component-children'

const CourseMenu = (props: any) => {
  let count = 0
  const arr2 = mapChildren(props.children, (c: any) => {
    if (c.type && c.type.name && c.type.name.toLowerCase() === 'connect') {
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
