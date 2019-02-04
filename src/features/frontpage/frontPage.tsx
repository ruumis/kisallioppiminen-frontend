import React from 'react'
import { InitialState } from '../../types/InitialState'
import CourseList from './components/CourseList'

export function frontPage(initialState: InitialState) {
  return (
    <div className="app">
      {/* Saatavilla olevat kurssit: */}
      <CourseList courses={initialState.courses} />
    </div>
  )
}
