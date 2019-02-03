import { InitialState } from '../types/InitialState'
import * as R from 'ramda'

export const pageStateReducer = (state: InitialState | null = null, action: { type: string; data: any }): InitialState | null => {
  const { data } = action
  switch (action.type) {
    case 'CHANGE_PAGE':
      if (typeof window !== 'undefined') {
        window.history.pushState({}, 'Kisällioppiminen', data)
        if (state) {
          const { pageParams } = state
          return {
            ...state,
            pageParams: {
              ...pageParams,
              path: data
            }
          }
        }
      }
      break
    case 'TOGGLE_CONTENT_BOX':
      if (state) {
        const { openedBoxes } = state.pageParams
        const currentValue = openedBoxes[data]
        return R.merge(state, {
          pageParams: {
            ...state.pageParams,
            openedBoxes: {
              ...openedBoxes,
              [data]: currentValue !== undefined ? !currentValue : true
            }
          }
        })
      }
  }
  return state
}
