import { coursePage } from './coursePage/coursePage'
import { InitialState } from '../types/InitialState'

export function createApp(initialState: InitialState) {
  return coursePage(initialState)
}
