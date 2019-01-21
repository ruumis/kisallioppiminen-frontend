import { InitialState } from '../types/InitialState'
import { Navigation } from './frontpage/Navigation'

export function createApp(initialState: InitialState) {
  return Navigation(initialState)
}
