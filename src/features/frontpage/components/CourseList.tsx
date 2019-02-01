import React from 'react'
import Course from './Course'
import {Course as CourseObject} from '../../../types/InitialState'

export default function CourseList(props: {courses: CourseObject[]}) {
  const {courses} = props
  return (
    <div className="courseList">
      {createCourses(courses)}
    </div>
  )
}

function createCourses(courses: CourseObject[]) {
  return courses
    .map((course, index) => <Course courseName={course.courseName} quickLinks={course.quickLinks} key={index} />)
}
