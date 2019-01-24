import React from 'react'
import './styles/Theorem.scss'

const Theorem = ({ header, text }: { header: any, text: any }) => {
  return (
    <div>
      <div className='theo_header'>
        <h3 className='theo_head_cont'> {header} </h3>
      </div>

      <div className='theo_content'>
        <p className='theo_text'>
          {text}
        </p>
      </div>

    </div>
  )
}



export default Theorem