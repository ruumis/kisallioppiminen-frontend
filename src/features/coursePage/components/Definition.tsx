import React from 'react'

const Definition = (props: any) => {
  return (
    <div>
      <div className="definition-header">
        <h3 className="definition-header-content"> {props.header} </h3>
      </div>

      <div className="definition-content">
        <p className="definition-text">{props.children}</p>
      </div>
    </div>
  )
}

export default Definition
