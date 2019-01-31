import React from 'react'

const Theorem = ({ header, text, rationalization }: { header: any; text: any; rationalization: any }) => {
  return (
    <div>
      <div className="theo_header">
        <h3 className="theo_head_cont"> {header} </h3>
      </div>

      <div className="theo_content">
        <p className="theo_text">{text}</p>
      </div>

      <div className="theo_rationalization">
        <p className="theo_text">{rationalization}</p>
      </div>
    </div>
  )
}

export default Theorem
