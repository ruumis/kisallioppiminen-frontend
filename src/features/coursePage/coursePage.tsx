import React from 'react'
import Header from './components/Header'
import Course from './components/Course'

export function coursePage(md: string) {
  return (
    <div className="App">
      <Header />
      <Course markdown={md} />
    </div>
  )
}
