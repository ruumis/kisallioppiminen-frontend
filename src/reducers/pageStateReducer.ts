import {InitialState} from '../types/InitialState'
import {Action} from './actions/pageStateActions'

export const pageStateReducer = (state: InitialState, action: Action) => {
  switch (action) {
    case 'CHANGE_PAGE':
        console.log(state)
        break
  }

  return state
}
