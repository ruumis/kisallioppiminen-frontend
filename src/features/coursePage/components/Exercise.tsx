import React from 'react'

const Exercise = (props: any) => {
  const toggleVisibility = (id: string) => {
    const content = document.getElementById(id)
    console.log('funktiota kutsuttiin')
    if (content) {
      console.log(content.style.display)
      if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block'
      } else {
        content.style.display = 'none'
      }
    }
  }
  if (!props.open) {
    return (
      <div>
        <div className="exercise" onClick={() => toggleVisibility('ex1')}>
          {props.header}
        </div>
        <div id="ex1" className="exercise-content">
          {props.children}
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="exercise" onClick={() => toggleVisibility('ex2')}>
        {props.header}
      </div>
      <div style={{ display: 'block' }} id="ex2" className="exercise-content">
        {props.children}
      </div>
    </div>
  )
}

export default Exercise
