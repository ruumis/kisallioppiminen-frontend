import React from 'react'
import { InitialState } from '../../types/InitialState'
import Navigation from '../frontpage/Navigation'
import Hero from '../frontpage/Hero'
import CourseList from '../frontpage/CourseList'

export function frontPage(initialState: InitialState) {
  return (
    <div >
      <Navigation />
      <Hero />
      {/* Saatavilla olevat kurssit: */}
      <CourseList />
    </div>
  )
}
