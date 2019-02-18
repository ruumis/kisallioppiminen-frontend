import React, { useState } from 'react'
import classnames from 'classnames'
import { filterChildren, mapChildren } from 'idyll-component-children'

interface Props {
  header: string
  content: string
  openedBoxes: { [index: string]: boolean }
}

const Chapter = (props: any, ref: any) => {
  const [open, setOpen] = useState(false)
  const contentClassname = classnames('chapter-content', { 'chapter-content-hidden': open !== true })
  
  // props.value = "Chapter"
  ref = "chapter"

  const start = props.count.number

  const arr = filterChildren(props.children, (c: any) => {
    return true
  })

  const toggleVisibility = () => {
    props.count.number = start
    setOpen(!open)
  }
  const arr2 = mapChildren(arr, (c: any) => {
    if (c.type.name && c.type.name.toLowerCase() === 'exercise') {
      props.count.number++
      const clone = React.cloneElement(c, {
        header: `Tehtävä ${props.numeral}.${props.count.number}: ${c.props.header}`
      })
      return clone
    }
    return c
  })

  return (
    <div>
      <div className="chapter" onClick={toggleVisibility}>
        {props.header} ({props.numeral}.{start + 1} - {props.numeral}.{props.count.number})
      </div>
      <div className={contentClassname}>
        {arr2}
        <div className="close-chapter" onClick={toggleVisibility}>
          Sulje kappale
        </div>
      </div>
    </div>
  )
}

export default Chapter
