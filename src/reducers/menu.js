import { TOGGLE_SIDE_MENU } from '../actions'

const menu = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_SIDE_MENU:
      return !state
    default:
      return state
  }
}

export default menu