import React from 'react'

const Definition = (props: any) => {
  return (
    <div>
      <div className="def_header">
        <h3 className="def_head_cont"> {props.header} </h3>
      </div>

      <div className="def_content">
        <p className="def_text">{props.children}</p>
      </div>
    </div>
  )
}

export default Definition
