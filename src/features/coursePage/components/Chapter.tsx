import React, { useState } from 'react'
import classnames from 'classnames'
import { filterChildren, mapChildren } from 'idyll-component-children'

interface Props {
  header: string
  content: string
  openedBoxes: { [index: string]: boolean }
}

const Chapter = (props: any) => {
  const [open, setOpen] = useState(false)
  const contentClassname = classnames('chapter-content', { 'chapter-content-hidden': open !== true })

  const arr = filterChildren(props.children, (c: any) => {
    return true
  })

  let count = 0

  const arr2 = mapChildren(arr, (c: any) => {
    if (c.type.name && c.type.name.toLowerCase() === 'exercise') {
      count++
      const clone = React.cloneElement(c, {
        header: `Tehtävä ${count}: ${c.props.header}`
      })
      console.log(clone)
      c = clone
      return clone
    }
    return c
  })

  return (
    <div>
      <div className="chapter" onClick={() => setOpen(!open)}>
        {props.header}
      </div>
      <div className={contentClassname}>
        {arr2}
        <div className="close-chapter" onClick={() => setOpen(!open)}>
          Sulje kappale
        </div>
      </div>
    </div>
  )
}

export default Chapter
