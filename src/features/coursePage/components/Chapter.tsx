import React from 'react'
const Chapter = (props: any) => {
  const toggleVisibility = () => {
    const pageContent = document.getElementById('testi')
    console.log('funktiota kutsuttiin')
    if (pageContent) {
      console.log(pageContent.style.display)
      if (pageContent.style.display === 'none' || pageContent.style.display === '') {
        pageContent.style.display = 'block'
      } else {
        pageContent.style.display = 'none'
      }
    }
  }
  // const { idyll, hasError, updateProps, ...props } = content

  // console.log(header)

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
