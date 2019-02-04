import React from 'react'
const Chapter = (props: any) => {
  const toggleVisibility = () => {
    const content = document.getElementById('testi')
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
      <div className="chapter" onClick={toggleVisibility}>
        {props.header}
      </div>
      <div id="testi" className="chapter_content">
        {props.children}
        <div className="close_chapter" onClick={toggleVisibility}>
          Sulje kappale
        </div>
      </div>
    </div>
  )
}
export default Chapter
