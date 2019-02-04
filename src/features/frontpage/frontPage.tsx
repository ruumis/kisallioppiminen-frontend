import React from 'react'
import { InitialState } from '../../types/InitialState'
import Hero from './components/Hero'
import CourseList from './components/CourseList'

export function frontPage(initialState: InitialState) {
  return (
    <div className="app">
      <Hero />
      {/* Saatavilla olevat kurssit: */}
      <CourseList />
    </div>
  )
}
