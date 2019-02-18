import React from 'react'
import { connect } from 'react-redux'
import Chapter from '../coursePage/components/Chapter'
import Scoreboard from './components/Scoreboard'

export function courseAdministrationPage() {
  const app = () => {
    return (
      <div className="courseAdministrationPageContainer">
        <h2 className="courseAdministrationPageContainer-heading">Kurssiesi tulostaulut:</h2>
        <Chapter header="Testikurssi">
          <Scoreboard />
        </Chapter>
      </div>
    )
  }

  const ConnectedCourseAdministrationPage = connect()(app)

  return <ConnectedCourseAdministrationPage />
}
