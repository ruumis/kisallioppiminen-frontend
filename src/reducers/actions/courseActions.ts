import { ThunkAction } from 'redux-thunk'
import { AnyAction } from 'redux'
import courseService from '../../services/courseService'

export const SELECT_COURSE_VERSION = 'SELECT_COURSE_VERSION'
export const FETCH_OWN_COURSES = 'FETCH_OWN_COURSES'
export const SET_OWN_COURSES = 'SET_OWN_COURSES'
<<<<<<< HEAD
export const JOIN_TEACHING_INSTANCE = 'JOIN_TEACHING_INSTANCE'
export const ADD_TEACHING_INSTANCE = 'ADD_TEACHING_INSTANCE'
=======
>>>>>>> 1c10ee868519c26feb98e3f1ceaf5a6bea30392b
export const FETCH_TEACHER_COURSES = 'FETCH_TEACHER_COURSES'
export const SET_TEACHER_COURSES = 'SET_TEACHER_COURSES'

export const selectCourseVersion = (version: string) => ({ type: SELECT_COURSE_VERSION, data: version })

export const setOwnCourses = (courses: any[]) => ({
  type: SET_OWN_COURSES,
  data: courses
})

<<<<<<< HEAD
export const addTeachingInstance = (course: any) => ({
  type: ADD_TEACHING_INSTANCE,
  data: course
})

export const joinTeachingInstance = (coursekey: string): ThunkAction<Promise<any[]>, {}, {}, AnyAction> => {
  return async dispatch =>
    courseService.joinTeachingInstanceService(coursekey).then((teachingInstance: any) => {
      dispatch(addTeachingInstance(teachingInstance))
      return teachingInstance
    })
}

=======
>>>>>>> 1c10ee868519c26feb98e3f1ceaf5a6bea30392b
export const setTeacherCourses = (courses: any[]) => ({
  type: SET_TEACHER_COURSES,
  data: courses
})

export const fetchOwnCourses = (): ThunkAction<Promise<any[]>, {}, {}, AnyAction> => {
  return async dispatch =>
    courseService.ownCourses().then((courses: any[]) => {
      dispatch(setOwnCourses(courses))
      return courses
    })
}

export const fetchTeacherCourses = (): ThunkAction<Promise<any[]>, {}, {}, AnyAction> => {
  return async dispatch =>
    courseService.teacherCourses().then((courses: any[]) => {
      dispatch(setTeacherCourses(courses))
      return courses
    })
}
