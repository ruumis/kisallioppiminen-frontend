import { combineReducers, createStore } from 'redux'
import { pageStateReducer } from './pageStateReducer'
import { InitialState, CoursePageState } from '../types/InitialState'
import { coursePageReducer } from './courseReducer'

const reducer = combineReducers({
  pageState: pageStateReducer,
  coursePageState: coursePageReducer
})

export const initStore = ({pageState, coursePageState}: {pageState: InitialState, coursePageState: CoursePageState}) => createStore(reducer,
  { pageState, coursePageState }
  // (typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION__) && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)
