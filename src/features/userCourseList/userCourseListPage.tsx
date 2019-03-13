import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import CourseWrapper from './components/CourseWrapper'
import Scoreboard from '../courseAdministrationPage/components/Scoreboard'
import { UserCourse } from '../../types/jsontypes'
import JoinCourse from './components/JoinCourse'
import courseService from './../../services/courseService'
import { InitialState, CoursePageState } from '../../types/InitialState'
import { ThunkDispatch } from 'redux-thunk'
import { fetchOwnCourses as fetchOwnCoursesAction } from '../../reducers/actions/courseActions'

interface Props {
  ownCourses: UserCourse[],
  fetchOwnCourses: () => Promise<void>
}

export function userCourseListPage() {

  const addCourses = (courses: UserCourse[]) =>
    courses.map(course => (
      <CourseWrapper key={course.id} header={course.name}>
        <Scoreboard students={course.students} />
      </CourseWrapper>
    ))

  const app = (props: Props) => {
    const {ownCourses, fetchOwnCourses} = props
    useEffect(() => {
      fetchOwnCourses()
    }, [])

    return (
      <div className="courseAdministrationPageContainer">
        <JoinCourse />
        {addCourses(ownCourses)}
      </div>
    )
  }

  const mapStateToProps = (state: {pageState: InitialState, coursePageState: CoursePageState}) => ({
    ownCourses: state.coursePageState.ownCourses
  })

  const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
    fetchOwnCourses: async () => {
      await dispatch(fetchOwnCoursesAction())
    }
  })

  const ConnectedUserCourseListPage = connect(mapStateToProps, mapDispatchToProps)(app)

  return <ConnectedUserCourseListPage />
}
