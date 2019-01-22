import React from 'react'
import { InitialState } from '../../types/InitialState'
import Navigation from '../frontpage/Navigation'
import Hero from '../frontpage/Hero'
import CourseList from '../frontpage/CourseList'
import Definition from './components/Definition'
import Chapter from './components/Chapter'

export function frontPage(initialState: InitialState) {
  return (
    <div >
      <Navigation />
      <Hero />
      {/* Saatavilla olevat kurssit: */}
      <CourseList />
      <Definition />
      <br />
      <Chapter />
    </div>
  )
}
