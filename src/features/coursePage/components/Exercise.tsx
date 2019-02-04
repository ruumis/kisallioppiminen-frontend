import React from 'react'

const Exercise = ({ header, text, answer, open }: { header: any; text: any; answer: any; open: boolean }) => {
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
  if (!open) {
    return (
      <div>
        <div className="exercise" onClick={() => toggleVisibility('ex1')}>
          {header}
        </div>
        <div id="ex1" className="ex_content">
          <p>{text}</p>
          <br />
          <div className="ex_answer" onClick={() => toggleVisibility('answer')}>
            Vastaus
          </div>
          <p id="answer" className="ex_hidden">
            {answer}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="exercise" onClick={() => toggleVisibility('ex2')}>
        {header}
      </div>
      <div style={{ display: 'block' }} id="ex2" className="ex_content">
        <p>{text}</p>
        <br />
        <div className="ex_answer" onClick={() => toggleVisibility('answer2')}>
          Vastaus
        </div>
        <p id="answer2" className="ex_hidden">
          {answer}
        </p>
      </div>
    </div>
  )
}

export default Exercise
