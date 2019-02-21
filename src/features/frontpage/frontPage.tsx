import React from 'react'
import { InitialState } from '../../types/InitialState'
import CourseList from './components/CourseList'
import { connect } from 'react-redux'

export function frontPage() {
  const mapStateToProps = ({ pageState }: { pageState: InitialState }) => ({
    pageState
  })
  const app = (props: { pageState: InitialState }) => {
    const { pageState } = props
    return (
      <div className="frontPageContainer">
        {/* Saatavilla olevat kurssit: */}
        <CourseList courses={pageState.courses} />
      </div>
    )
  }

  const ConnectedFrontPage = connect(
    mapStateToProps,
    {}
  )(app)

  return <ConnectedFrontPage />
}
