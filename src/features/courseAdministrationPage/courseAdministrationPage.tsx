import React, { useState } from 'react'
import { connect } from 'react-redux'
import Chapter from '../coursePage/components/Chapter'
import Scoreboard from './components/Scoreboard'
import { ExercisesState } from './../../types/InitialState'
import { UserCourse } from '../../types/jsontypes'
import NewInstanceForm from './components/NewInstanceForm'

export function courseAdministrationPage() {
  // Replace courses below with a request to server once the server is running
  const courses = [
    {
      name: 'MAY1: Lukujonot ja summat',
      coursekey: 'matikkaonkivaa',
      id: '123',
      version: '1',
      startdate: '2017-03-14',
      enddate: '2017-05-02',
      students: [
        {
          user: 'Anthony',
          exercises: [
            {
              id: '12a9f399-3b49-11e9-a38a-09f848b19644',
              status: 'green'
            },
            {
              id: '12a9f39a-3b49-11e9-a38a-09f848b19644',
              status: 'yellow'
            }
          ]
        },
        {
          user: 'Bert',
          exercises: [
            {
              id: '12a9f399-3b49-11e9-a38a-09f848b19644',
              status: 'red'
            },
            {
              id: '12a9f39a-3b49-11e9-a38a-09f848b19644',
              status: 'red'
            }
          ]
        }
      ]
    },
    {
      name: 'MAY1: Lukujonot ja summat',
      coursekey: 'matikkaonkivaa2',
      id: '123',
      version: '1.1',
      startdate: '2017-03-14',
      enddate: '2017-05-02',
      students: [
        {
          user: 'Anthony',
          exercises: [
            {
              id: '12a9f396-3b49-11e9-a38a-09f848b19644',
              status: 'green'
            },
            {
              id: '12a9f397-3b49-11e9-a38a-09f848b19644',
              status: 'yellow'
            }
          ]
        },
        {
          user: 'Bert',
          exercises: [
            {
              id: '12a9f398-3b49-11e9-a38a-09f848b19644',
              status: 'red'
            },
            {
              id: '12a9f397-3b49-11e9-a38a-09f848b19644',
              status: 'green'
            }
          ]
        }
      ]
    },
    {
      name: 'MAA3 - Geometria',
      coursekey: 'matikkaonkivaa3',
      id: '1234',
      version: '1',
      startdate: '2017-03-14',
      enddate: '2017-05-02',
      students: [
        {
          user: 'Anthony',
          exercises: [
            {
              id: '12a9cc85-3b49-11e9-a38a-09f848b19644',
              status: 'green'
            },
            {
              id: '12a9cc86-3b49-11e9-a38a-09f848b19644',
              status: 'yellow'
            }
          ]
        },
        {
          user: 'Bert',
          exercises: [
            {
              id: '12a9cc87-3b49-11e9-a38a-09f848b19644',
              status: 'red'
            },
            {
              id: '12a9cc85-3b49-11e9-a38a-09f848b19644',
              status: 'yellow'
            }
          ]
        }
      ]
    }
  ]

  const [open, setOpen] = useState(false)
  const formClass = open ? 'newInstanceForm-visible' : 'newInstanceForm-hidden'
  const buttonText = open ? 'Sulje lomake' : 'Uusi kurssi'

  const app = ({ exercises }: { exercises: ExercisesState }) => {
    const betterCourses = courses.map(c => {
      if (exercises !== null && exercises.courseExercises !== null && exercises.idToNumber !== null) {
        const exerciseNumbers = exercises.courseExercises[`${c.id} ${c.version}`].map(e => exercises.idToNumber[e])

        const students = c.students.map(s => ({ ...s, exercises: s.exercises.map(ex => ({ ...ex, id: exercises.idToNumber[ex.id] })) }))

        return {
          ...c,
          exerciseNumbers,
          students
        }
      }
      return { ...c, exerciseNumbers: [] }
    })

    const displayForm = () =>
      setOpen(!open)

    return (
      <div>
        <div className={formClass}>
          <NewInstanceForm />
        </div>
        <div className="courseAdministrationPageContainer">
          <div className="courseAdministrationPageContainer-heading">
            <button className="newCourseButton" onClick={displayForm}>{buttonText}</button>
            <h2>Kurssiesi tulostaulut:</h2>
          </div>
          {addCourses(betterCourses)}
        </div>
      </div>
    )
  }

  const addCourses = (betterCourses: UserCourse[]) =>
    betterCourses.map((course: UserCourse) => (
      <Chapter key={`${course.id} ${course.version}`} header={course.name}>
        <Scoreboard course={course} />
      </Chapter>
    ))

  const mapStateToProps = ({ exercises }: { exercises: ExercisesState }) => {
    return { exercises }
  }

  const ConnectedCourseAdministrationPage = connect(mapStateToProps)(app)

  return <ConnectedCourseAdministrationPage />
}
