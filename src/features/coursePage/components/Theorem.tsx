import React from 'react'
import './styles/Theorem.scss'

const Theorem = ({ header, content, rationalization }: { header: any; content: any; rationalization: any }) => {
  return (
    <div>
      <div className="theo_header">
        <h3 className="theo_head_cont"> {header} </h3>
      </div>

      <div className="theo_content">
        <p className="theo_text">{content}</p>
      </div>

      <div className="theo_rationalization">
        <p className="theo_text">{rationalization}</p>
      </div>
    </div>
  )
}

export default Theorem
