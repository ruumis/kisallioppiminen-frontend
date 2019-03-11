import { combineReducers, createStore, applyMiddleware } from 'redux'
import { pageStateReducer } from './pageStateReducer'
import { InitialState, CoursePageState, ExercisesState } from '../types/InitialState'
import { coursePageReducer, exerciseReducer } from './courseReducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  pageState: pageStateReducer,
  coursePageState: coursePageReducer,
  exercises: exerciseReducer
})

export const initStore = ({ pageState, coursePageState, exercises }: { pageState: InitialState; coursePageState: CoursePageState; exercises: ExercisesState }) =>
  createStore(reducer, { pageState, coursePageState, exercises }, applyMiddleware(thunk))
// (typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION__) && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
