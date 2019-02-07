import React, { useState } from 'react'

const CourseSection = (props:any) => {
  return (
		props.value === props.sectionId ? 
		<div>{props.children}</div> 
		: 
		<div></div>
	)
}

export default CourseSection
