import React from 'react'

const CourseMenu = (props: any, ref: any) => {
  ref = "menuuuu"
  return (
    <div className="containerwrapper">
      {props.children}
    </div>
  )
}

export default CourseMenu
