import React, { useState } from 'react'

const CourseSection = (props:any) => {
  return (
		props.value === props.sectionId ? 
		<div id="CourseSection">{props.children}</div> 
		: 
		<div style={{ display: 'none' }}></div>
	)
}

export default CourseSection
