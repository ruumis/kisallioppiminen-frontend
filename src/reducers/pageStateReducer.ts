import { InitialState } from '../types/InitialState'

export const pageStateReducer = (state: InitialState | null = null, action: { type: string; data: any }) => {
  switch (action.type) {
    case 'CHANGE_PAGE':
      if (typeof window !== 'undefined') {
        const { data } = action
        window.history.pushState({}, 'Kisällioppiminen', data)
        if (state) {
          const { pageParams } = state
          state = {
            ...state,
            pageParams: {
              ...pageParams,
              path: data
            }
          }
        }
      }
      break
  }
  return state
}
