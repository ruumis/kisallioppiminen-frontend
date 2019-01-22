import React, {Component } from 'react'
import './styles/Chapter.scss'

export class Chapter extends Component {
  
  render() {

    const toggleVisibility = () => {
      let content = document.getElementById('testi')
      console.log('funktiota kutsuttiin')
      if (content) {
        console.log(content.style.display)
        if (content.style.display === 'none' || content.style.display == '') {
          content.style.display = 'block'
        }else {
          content.style.display = 'none'
        }
      }
    }


    return (
      <div onClick={a}>
        <div className='chapter' onClick={toggleVisibility}>Tämä on luvun otsikko</div>
        <div id='testi' className='chapter_content'>
          <p>Tekstsssssiä</p>
        </div>
      </div>
    )
  }
}

function a() {
  console.log('sdfds')
}


export default Chapter