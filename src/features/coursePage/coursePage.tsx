import React from 'react'
import { InitialState } from '../../types/InitialState'
import { CourseHeader } from './components/CourseHeader'

export function coursePage(initialState: InitialState) {
  return (
    <div>
      <h1>Kurssisivu</h1>
      <CourseHeader headerContent={initialState.courseHeaderMarkdown} />
    </div>
  )
}
