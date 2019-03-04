import { combineReducers, createStore } from 'redux'
import { pageStateReducer } from './pageStateReducer'
import { InitialState, CoursePageState, ExercisesState } from '../types/InitialState'
import { coursePageReducer, exerciseReducer } from './courseReducer'

const reducer = combineReducers({
  pageState: pageStateReducer,
  coursePageState: coursePageReducer,
  exercises: exerciseReducer
})

export const initStore = ({ pageState, coursePageState, exercises }: { pageState: InitialState; coursePageState: CoursePageState; exercises: ExercisesState }) =>
  createStore(
    reducer,
    { pageState, coursePageState, exercises }
    // (typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION__) && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
