import { frontPage } from './coursePage/frontPage'
import { InitialState } from '../types/InitialState'
import './application.css'

export function createApp(initialState: InitialState) {
  return frontPage(initialState)
}
