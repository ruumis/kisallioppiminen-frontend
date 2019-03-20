import React, { useState } from 'react'
import { connect } from 'react-redux'
import Chapter from '../coursePage/components/Chapter'
import Scoreboard from './components/Scoreboard'
import NewInstanceForm from './components/NewInstanceForm'
import classnames from 'classnames'

export function courseAdministrationPage() {
  // Replace courses below with a request to server once the server is running
  const courses = [
    {
      name: 'MAY1: Lukujonot ja summat',
      coursekey: 'matikkaonkivaa',
      id: 1,
      html_id: 'may1',
      startdate: '2017-03-14',
      enddate: '2017-05-02',
      students: [
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
    },
    {
      name: 'Testikurssi',
      coursekey: 'matikkaonkivaa',
      id: 2,
      html_id: 'may1',
      startdate: '2017-03-14',
      enddate: '2017-05-02',
      students: [
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
    },
    {
      name: 'MAA3: Geometria',
      coursekey: 'matikkaonkivaa',
      id: 3,
      html_id: 'may1',
      startdate: '2017-03-14',
      enddate: '2017-05-02',
      students: [
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
    }
  ]

  const [open, setOpen] = useState(false)
  const formClass = classnames('newInstanceForm-visible', { 'newInstanceForm-hidden': open !== true })

  const addCourses = () =>
    courses.map(course =>
      <Chapter key={course.id} header={course.name}>
        <Scoreboard students={course.students} />
      </Chapter>)

  const displayForm = () =>
    setOpen(!open)

  const app = () => {
    return (
      <div>
        <div className={formClass}>
          <NewInstanceForm></NewInstanceForm>
        </div>
        <div className="courseAdministrationPageContainer">
          <div className="courseAdministrationPageContainer-heading">
            <button className="newCourseButton" onClick={displayForm}>Uusi kurssi</button>
            <h2>Kurssiesi tulostaulut:</h2>
          </div>
          {addCourses()}
        </div>
      </div>
    )
  }

  const ConnectedCourseAdministrationPage = connect()(app)

  return <ConnectedCourseAdministrationPage />
}
