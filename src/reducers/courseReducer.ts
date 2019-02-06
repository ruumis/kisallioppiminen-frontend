import {CoursePageState } from '../types/InitialState'
import * as R from 'ramda'

export const coursePageReducer = (state: CoursePageState | null = null, action: { type: string; data: any }): CoursePageState | null => {
  const  { data } = action
  switch (action.type) {
    case 'SELECT_COURSE_VERSION':
      if (state) {
        return R.merge(state, { selectedCourseVersion: data })
      }
      break
    case 'TOGGLE_CONTENT_BOX':
    if (state) {
      const { openedBoxes } = state
      const currentValue = openedBoxes[data]
      return R.merge(state, {
        openedBoxes: {
          ...openedBoxes,
          [data]: currentValue !== undefined ? !currentValue : true
        }
      })
    }
  }

  return state
}
