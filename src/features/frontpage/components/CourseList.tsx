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
    .map((course, index) => <Course id={course.id} courseName={course.courseName} quickLinks={course.quickLinks} version={course.courseContent[course.courseContent.length - 1].version} key={index} />)
}
