import React from 'react'
import Course from './Course'
import './CourseList.css'

export default function CourseList() {
  return (
    <div className="courseList">
      <div style={{ margin: '0 auto' }}>
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
      </div>
    </div>
  )
}
