import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import CourseWrapper from './components/CourseWrapper'
import Scoreboard from '../courseAdministrationPage/components/Scoreboard'
import { UserCourse } from '../../types/jsontypes'
import JoinCourse from './components/JoinCourse'
import courseService from './../../services/courseService'
import { InitialState, CoursePageState, ExercisesState } from '../../types/InitialState'
import { ThunkDispatch } from 'redux-thunk'
import { fetchOwnCourses as fetchOwnCoursesAction } from '../../reducers/actions/courseActions'

interface Props {
  ownCourses: UserCourse[]
  fetchOwnCourses: () => Promise<void>
  exercises: ExercisesState
}

export function userCourseListPage() {
  const addCourses = (courses: UserCourse[]) =>
    courses.map(course => (
      <CourseWrapper key={course.id} header={course.name} coursekey={course.coursekey} startdate={course.startdate} enddate={course.enddate}>
        <Scoreboard course={course} />
      </CourseWrapper>
    ))

  const app = (props: Props) => {
    const { ownCourses, fetchOwnCourses, exercises } = props

    useEffect(() => {
      fetchOwnCourses()
    }, [])

    const betterCourses = ownCourses.map(c => {
      if (exercises !== null && exercises.courseExercises !== null && exercises.idToNumber !== null && exercises.courseExercises[`${c.id} ${c.version}`] !== undefined) {
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

    return (
      <div className="courseAdministrationPageContainer">
        <JoinCourse />
        {addCourses(betterCourses)}
      </div>
    )
  }

  const mapStateToProps = (state: { pageState: InitialState; coursePageState: CoursePageState; exercises: ExercisesState }) => ({
    ownCourses: state.coursePageState.ownCourses,
    exercises: state.exercises
  })

  const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
    fetchOwnCourses: async () => {
      await dispatch(fetchOwnCoursesAction())
    }
  })

  const ConnectedUserCourseListPage = connect(
    mapStateToProps,
    mapDispatchToProps
  )(app)

  return <ConnectedUserCourseListPage />
}
