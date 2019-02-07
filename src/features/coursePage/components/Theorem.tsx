import React from 'react'

const Theorem = (props: any) => {
  return (
    <div>
      <div className="theorem-header">
        <h3 className="theorem-header-content"> {props.header} </h3>
      </div>

      <div className="theorem-content">
        <p className="theorem-text">{props.children}</p>
      </div>
    </div>
  )
}

export default Theorem
