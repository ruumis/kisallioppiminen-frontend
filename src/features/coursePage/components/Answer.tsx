import React from 'react'

const Answer = (props: any) => {
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

  return (
    <div>
      <div className="ex_answer" onClick={() => toggleVisibility('answer2')}>
        Vastaus
      </div>
      <div id="answer2" className="ex_hidden">
        {props.children}
      </div>
    </div>
  )
}

export default Answer
