import React, { useState } from 'react'
import classnames from 'classnames'

const Exercise = (props: any) => {
  const [open, setOpen] = useState(props.open)
  const contentClassname = classnames('exercise-content', { 'exercise-content-hidden': open !== true })

  return (
    <div>
      <div className="exercise" onClick={() => setOpen(!open)}>
        {props.header}
      </div>
      <div className={contentClassname}>{props.children}</div>
    </div>
  )
}

export default Exercise
