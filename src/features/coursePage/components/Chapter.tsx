import React, { useState } from 'react'
import classnames from 'classnames'

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

  return (
    <div>
      <div className="chapter" onClick={() => setOpen(!open)}>
        {props.header}
      </div>
      <div className={contentClassname}>
        {props.children}
        <div className="close-chapter" onClick={() => setOpen(!open)}>
          Sulje kappale
        </div>
      </div>
    </div>
  )
}

export default Chapter
