import { frontPage } from './coursePage/frontPage'
import { InitialState } from '../types/InitialState'

export function createApp(initialState: InitialState) {
  return frontPage(initialState)
}
