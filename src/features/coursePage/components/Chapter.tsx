import React from 'react'

const Chapter = ({ header, content }: { header: any; content: any }) => {
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

  console.log(header)
  console.log(content)

  return (
    <div>
      <div className="chapter" onClick={toggleVisibility}>
        {header}
      </div>
      <div id="testi" className="chapter_content">
        {content}
        <div className="close_chapter" onClick={toggleVisibility}>
          Sulje kappale
        </div>
      </div>
    </div>
  )
}
export default Chapter
