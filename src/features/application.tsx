import { coursePage } from './coursePage/coursePage'
import { InitialState } from '../types/InitialState'
import './application.scss'

export function createApp(initialState: InitialState) {
  return coursePage(initialState)
}
