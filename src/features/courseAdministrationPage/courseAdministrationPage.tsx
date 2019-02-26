import React from 'react'
import { connect } from 'react-redux'
import Chapter from '../coursePage/components/Chapter'
import Scoreboard from './components/Scoreboard'

export function courseAdministrationPage() {
  const testidata = [
    {
      user: 'Anthony',
      exercises: [
        {
          id: '3BA56960-503F-4697-B508-9F4A3EEAC41B',
          status: 'green'
        },
        {
          id: 'CA5CC927-2800-427C-AD31-4FD0DD06C068',
          status: 'yellow'
        }
      ]
    },
    {
      user: 'Bert',
      exercises: [
        {
          id: '3BA56960-503F-4697-B508-9F4A3EEAC41B',
          status: 'red'
        },
        {
          id: 'CA5CC927-2800-427C-AD31-4FD0DD06C068',
          status: 'gray'
        }
      ]
    }
  ]

  const app = () => {
    return (
      <div className="courseAdministrationPageContainer">
        <h2 className="courseAdministrationPageContainer-heading">Kurssiesi tulostaulut:</h2>
        <Chapter header="Testikurssi">
          <Scoreboard students={testidata} />
        </Chapter>
      </div>
    )
  }

  const ConnectedCourseAdministrationPage = connect()(app)

  return <ConnectedCourseAdministrationPage />
}
