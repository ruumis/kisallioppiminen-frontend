import React, { useState } from 'react'

const CourseTab = (props: any) => {
  function changeTab() {
    props.updateProps({
      value: props.tabId
    })
  }

  return (
		props.value === props.tabId ? ( 
      <div style={{ backgroundColor: '#30A491' }} className="section" onClick={() => changeTab()}>
        {props.header}
      </div>
    ) : (
      <div className="section" onClick={() => changeTab()}>
        {props.header}
      </div>
    )
  )
}

export default CourseTab
