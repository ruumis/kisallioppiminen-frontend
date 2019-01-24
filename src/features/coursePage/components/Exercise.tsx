import React from 'react'
import './styles/Exercise.scss'

const Exercise = ({ header, text }: { header: any, text: any }) => {



  const toggleVisibility = () => {
    let content = document.getElementById("ex1")
    console.log('funktiota kutsuttiin')
    if (content) {
      console.log(content.style.display)
      if (content.style.display === 'none' || content.style.display == '') {
        content.style.display = 'block'
      } else {
        content.style.display = 'none'
      }
    }
  }



  return (
    <div onClick={a}>
      <div className='exercise' onClick={toggleVisibility}>{header}</div>
      <div id='ex1' className='ex_content'>
        {text}
      </div>
    </div>
  )

}

function a() {
  console.log('sdfds')
}


export default Exercise