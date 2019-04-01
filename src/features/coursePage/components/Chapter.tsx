import React, { useState } from 'react'
import classnames from 'classnames'
import { mapChildren } from 'idyll-component-children'
import { User } from '../../../types/InitialState'

interface Props {
  header: string
  content: string
  openedBoxes: { [index: string]: boolean }
  user: User | null
  coursekey: string | null
}

const Chapter = (props: any) => {
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
      if (c.type && c.type.name && c.type.name.toLowerCase() === 'exercise') {
        props.count.number++
        const clone = React.cloneElement(c, {
          header: `Tehtävä ${props.numeral}.${props.count.number}: ${c.props.header}`,
          user: props.user,
          coursekey: props.coursekey
        })
        return clone
      }
      return c
    })
  }

  const exercises = () => {
    if (!props.count || props.count.number === start) {
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
