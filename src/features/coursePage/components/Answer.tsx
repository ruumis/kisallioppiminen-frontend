import React, { useState } from 'react'
import classnames from 'classnames'

const Answer = (props: any) => {
  const [open, setOpen] = useState(props.open)
  const contentClassname = classnames('exercise-answer-content', { 'exercise-answer-content-hidden': open !== true })

  return (
    <div>
      <div className="exercise-answer" onClick={() => setOpen(!open)}>
        Vastaus
      </div>
      <div className={contentClassname}>{props.children}</div>
    </div>
  )
}

export default Answer
