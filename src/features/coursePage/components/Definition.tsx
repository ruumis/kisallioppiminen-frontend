import React from 'react'
import './styles/Definition.scss'

const Definition = ({ header, text }: { header: any, text: any }) => {


  return (
    <div>
      <div className='header'>
        <h3 className='head_cont'> {header} </h3>
      </div>

      <div className='def_content'>
        <p className='def_text'>
          {text}
          </p>
      </div>

    </div>
  )
}



export default Definition