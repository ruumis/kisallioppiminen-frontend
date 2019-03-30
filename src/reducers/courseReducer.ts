import { CoursePageState, ExercisesState } from '../types/InitialState'
import * as R from 'ramda'

export const coursePageReducer = (state: CoursePageState | null = null, action: { type: string; data: any }): CoursePageState | null => {
  const { data } = action
  switch (action.type) {
    case 'SELECT_COURSE_VERSION':
      if (state) {
        return R.merge(state, { selectedCourseVersion: data })
      }
      break
    case 'SET_OWN_COURSES':
      if (state) {
        return R.merge(state, { ownCourses: data })
<<<<<<< HEAD
=======
      }
      break
    case 'SET_TEACHER_COURSES':
      if (state) {
        return R.merge(state, { teacherCourses: data })
>>>>>>> 1c10ee868519c26feb98e3f1ceaf5a6bea30392b
      }
      break
    case 'SET_TEACHER_COURSES':
      if (state) {
        return R.merge(state, { teacherCourses: data })
      }
      break
    case 'ADD_TEACHING_INSTANCE':
      if (state) {
        return R.merge(state, { ownCourses: [...state.ownCourses, data] })
      }
  }

  return state
}

export const exerciseReducer = (state: ExercisesState | null = null, action: { type: string; data: any }): ExercisesState | null => {
  return state
}
