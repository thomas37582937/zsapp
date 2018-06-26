import * as ActionTypes from '../commons/ActionTypes'

const initialState = {}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionTypes.USER_LOGIN: {
      return { ...state, ...action.user }
    }
    case ActionTypes.TOKEN:{
      return { ...state, ...action.access_token }
    }
    default:
      return state
  }
}
