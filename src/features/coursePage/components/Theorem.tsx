import React from 'react'

const Theorem = (props: any) => {
  return (
    <div>
      <div className="theo_header">
        <h3 className="theo_head_cont"> {props.header} </h3>
      </div>

      <div className="theo_content">
        <p className="theo_text">{props.children}</p>
      </div>
    </div>
  )
}

export default Theorem
