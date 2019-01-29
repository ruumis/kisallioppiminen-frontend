import {combineReducers, createStore} from 'redux'
import {pageStateReducer} from './pageStateReducer'
import { InitialState } from '../types/InitialState'

const reducer = combineReducers({
  pageState: pageStateReducer
})

export const initStore = (initalState: InitialState) => {
  console.log(initalState)
  return createStore(reducer, {pageState: initalState})
}
