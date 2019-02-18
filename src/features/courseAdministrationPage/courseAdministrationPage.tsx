import React from 'react'
import { connect } from 'react-redux'
import Chapter from '../coursePage/components/Chapter'

export function courseAdministrationPage() {
  const app = () => {
    return (
      <p>Hello world</p>
    )
  }

  const ConnectedCourseAdministrationPage = connect()(app)

  return <ConnectedCourseAdministrationPage />
}