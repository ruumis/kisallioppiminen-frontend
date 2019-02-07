import React from 'react'

const ContainerWrapper = (props: any) => {
  return (
    <div className="containerwrapper">
      {props.children}
    </div>
  )
}

export default ContainerWrapper
