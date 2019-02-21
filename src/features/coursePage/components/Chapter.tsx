import React, { useState } from 'react'
import classnames from 'classnames'
import { mapChildren } from 'idyll-component-children'

interface Props {
  header: string
  content: string
  openedBoxes: { [index: string]: boolean }
}

const Chapter = (props: any) => {
  const [open, setOpen] = useState(false)
  const contentClassname = classnames('chapter-content', { 'chapter-content-hidden': open !== true })
  const start = props.count.number

  const toggleVisibility = () => {
    props.count.number = start
    setOpen(!open)
  }

  let arr = props.children
  if (props.children && props.children[0].type) {
    arr = mapChildren(props.children, (c: any) => {
      if (c.type && c.type.name && c.type.name.toLowerCase() === 'exercise') {
        props.count.number++
        const clone = React.cloneElement(c, {
          header: `Tehtävä ${props.numeral}.${props.count.number}: ${c.props.header}`
        })
        return clone
      }
      return c
    })
  }

  const exercises = () => {
    if (props.count.number === start) {
      return null
    }

    if (props.count.number - start > 1) {
      return `(${props.numeral}.${start + 1} - ${props.numeral}.${props.count.number})`
    }

    return `(${props.numeral}.${props.count.number})`
  }

  return (
    <div>
      <div className="chapter" onClick={toggleVisibility}>
        {props.header} {exercises()}
      </div>
      <div className={contentClassname}>
        {arr}
        <div className="close-chapter" onClick={toggleVisibility}>
          Sulje kappale
        </div>
      </div>
    </div>
  )
}

export default Chapter
