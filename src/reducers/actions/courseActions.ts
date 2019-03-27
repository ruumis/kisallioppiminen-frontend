import { ThunkAction } from 'redux-thunk'
import { AnyAction } from 'redux'
import courseService from '../../services/courseService'

export const SELECT_COURSE_VERSION = 'SELECT_COURSE_VERSION'
export const FETCH_OWN_COURSES = 'FETCH_OWN_COURSES'
export const SET_OWN_COURSES = 'SET_OWN_COURSES'
export const JOIN_TEACHING_INSTANCE = 'JOIN_TEACHING_INSTANCE'
export const ADD_TEACHING_INSTANCE = 'ADD_TEACHING_INSTANCE'

export const selectCourseVersion = (version: string) => ({ type: SELECT_COURSE_VERSION, data: version })

export const setOwnCourses = (courses: any[]) => ({
  type: SET_OWN_COURSES,
  data: courses
})

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

export const fetchOwnCourses = (): ThunkAction<Promise<any[]>, {}, {}, AnyAction> => {
  return async dispatch =>
    courseService.ownCourses().then((courses: any[]) => {
      dispatch(setOwnCourses(courses))
      return courses
    })
}
