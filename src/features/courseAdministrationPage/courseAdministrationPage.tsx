import React from 'react'
import { connect } from 'react-redux'
import Chapter from '../coursePage/components/Chapter'

export function courseAdministrationPage() {
  const app = () => {
    return (
      <div className="courseAdministrationPageContainer">
        <h2 className="courseAdministrationPageContainer-heading">Kurssiesi tulostaulut:</h2>
        <Chapter header="Testikurssi">
          <p>Dummy-dataa</p>
        </Chapter>
      </div>
    )
  }

  const ConnectedCourseAdministrationPage = connect()(app)

  return <ConnectedCourseAdministrationPage />
}
