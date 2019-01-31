import React from 'react'

const Definition = ({ header, text }: { header: any; text: any }) => {
  return (
    <div>
      <div className="def_header">
        <h3 className="def_head_cont"> {header} </h3>
      </div>

      <div className="def_content">
        <p className="def_text">{text}</p>
      </div>
    </div>
  )
}

export default Definition
