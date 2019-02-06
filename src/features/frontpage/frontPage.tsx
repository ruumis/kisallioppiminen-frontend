import React from 'react'
import { InitialState } from '../../types/InitialState'
import CourseList from './components/CourseList'
import { connect } from 'react-redux'
import Hero from '../baseComponents/Hero'

export function frontPage() {
  const mapStateToProps = ({pageState}: {pageState: InitialState}) => ({
    pageState
  })
  const app = (props: {pageState: InitialState}) => {
    const { pageState } = props
    return (
      <div>
        <Hero />
        {/* Saatavilla olevat kurssit: */}
        <CourseList courses={pageState.courses} />
      </div>
    )
  }

  const ConnectedFrotPage = connect(mapStateToProps, {})(app)

  return (
    <ConnectedFrotPage />
  )
}
