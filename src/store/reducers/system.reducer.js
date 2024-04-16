export const LOADING_START = 'LOADING_START'
export const LOADING_DONE = 'LOADING_DONE'
export const MODAL_STATUS = 'MODAL_STATUS'

const initialState = {
  isLoading: false,
  isModalOpen: false
}

export function systemReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOADING_START:
      return { ...state, isLoading: true }
    case LOADING_DONE:
      return { ...state, isLoading: false }
    case MODAL_STATUS:
      return { ...state, isModalOpen: false }
    default: return state
  }
}
