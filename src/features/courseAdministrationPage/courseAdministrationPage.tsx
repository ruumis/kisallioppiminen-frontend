import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Chapter from '../coursePage/components/Chapter'
import Scoreboard from './components/Scoreboard'
import { ExercisesState, Course, CoursePageState, InitialState } from './../../types/InitialState'
import { UserCourse, IdyllCourses } from '../../types/jsontypes'
import courseService from '../../services/courseService'
import { ThunkDispatch } from 'redux-thunk'
import { fetchTeacherCourses as fetchTeacherCoursesAction } from '../../reducers/actions/courseActions'

export function courseAdministrationPage() {
  // Replace courses below with a request to server once the server is running
  /*  const courses = [
    {
      name: 'MAY1: Lukujonot ja summat',
      coursekey: 'matikkaonkivaa',
      id: '123',
      version: '1',
      startdate: '2017-03-14',
      enddate: '2017-05-02',
      students: [
        {
          firstname: 'Anthony',
          lastname: 'Droptables',
          exercises: [
            {
              uuid: '12a9f399-3b49-11e9-a38a-09f848b19644',
              status: 'green'
            },
            {
              uuid: '12a9f39a-3b49-11e9-a38a-09f848b19644',
              status: 'yellow'
            }
          ]
        },
        {
          firstname: 'Bert',
          lastname: 'Droptables',
          exercises: [
            {
              uuid: '12a9f399-3b49-11e9-a38a-09f848b19644',
              status: 'red'
            },
            {
              uuid: '12a9f39a-3b49-11e9-a38a-09f848b19644',
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
          firstname: 'Anthony',
          lastname: 'Droptables',
          exercises: [
            {
              uuid: '12a9f396-3b49-11e9-a38a-09f848b19644',
              status: 'green'
            },
            {
              uuid: '12a9f397-3b49-11e9-a38a-09f848b19644',
              status: 'yellow'
            }
          ]
        },
        {
          firstname: 'Bert',
          lastname: 'Droptables',
          exercises: [
            {
              uuid: '12a9f398-3b49-11e9-a38a-09f848b19644',
              status: 'red'
            },
            {
              uuid: '12a9f397-3b49-11e9-a38a-09f848b19644',
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
          firstname: 'Anthony',
          lastname: 'Droptables',
          exercises: [
            {
              uuid: '12a9cc85-3b49-11e9-a38a-09f848b19644',
              status: 'green'
            },
            {
              uuid: '12a9cc86-3b49-11e9-a38a-09f848b19644',
              status: 'yellow'
            }
          ]
        },
        {
          firstname: 'Bert',
          lastname: 'Droptables',
          exercises: [
            {
              uuid: '12a9cc87-3b49-11e9-a38a-09f848b19644',
              status: 'red'
            },
            {
              uuid: '12a9cc85-3b49-11e9-a38a-09f848b19644',
              status: 'yellow'
            }
          ]
        }
      ]
    }
  ]
*/

  const app = ({
    exercises,
    allCourses,
    fetchTeacherCourses,
    teacherCourses
  }: {
    exercises: ExercisesState
    allCourses: Course[]
    fetchTeacherCourses: () => Promise<void>
    teacherCourses: UserCourse[]
  }) => {
    useEffect(() => {
      fetchTeacherCourses()
    }, [])
    const betterCourses = teacherCourses.map(c => {
      const courseId = allCourses.filter(c2 => c.coursematerial_name === c2.courseName)[0].id
      if (exercises !== null && exercises.courseExercises !== null && exercises.idToNumber !== null) {
        const exerciseNumbers = exercises.courseExercises[`${courseId} ${c.version}`].map(e => exercises.idToNumber[e])

        const students = c.students.map(s => ({ ...s, exercises: s.exercises.map(ex => ({ ...ex, uuid: exercises.idToNumber[ex.uuid] })) }))

        return {
          ...c,
          id: courseId,
          exerciseNumbers,
          students
        }
      }
      return { ...c, exerciseNumbers: [] }
    })

    return (
      <div className="courseAdministrationPageContainer">
        <div className="courseAdministrationPageContainer-heading">
          <button className="newCourseButton">Uusi kurssi</button>
          <h2>Kurssiesi tulostaulut:</h2>
        </div>
        {addCourses(betterCourses)}
      </div>
    )
  }

  const addCourses = (betterCourses: UserCourse[]) =>
    betterCourses.map((course: UserCourse) => (
      <Chapter key={`${course.id} ${course.version}`} header={course.name}>
        <Scoreboard course={course} />
      </Chapter>
    ))

  const mapStateToProps = ({
    exercises,
    pageState,
    coursePageState
  }: {
    exercises: ExercisesState
    pageState: InitialState
    allCourses: Course[]
    coursePageState: CoursePageState
  }) => {
    return { exercises, allCourses: pageState.courses, teacherCourses: coursePageState.teacherCourses }
  }

  const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
    fetchTeacherCourses: async () => {
      await dispatch(fetchTeacherCoursesAction())
    }
  })

  const ConnectedCourseAdministrationPage = connect(
    mapStateToProps,
    mapDispatchToProps
  )(app)

  return <ConnectedCourseAdministrationPage />
}
