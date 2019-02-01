import { combineReducers, createStore } from 'redux'
import { pageStateReducer } from './pageStateReducer'
import { InitialState } from '../types/InitialState'

const reducer = combineReducers({
  pageState: pageStateReducer
})

export const initStore = (initalState: InitialState) => createStore(reducer, {pageState: initalState})
