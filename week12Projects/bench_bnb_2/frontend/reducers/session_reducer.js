import { bindActionCreators } from 'redux';
import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../actions/session_actions';

const _nullId = {
  id: null
}

export const sessionReducer = (state = _nullId, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState.id = action.user.id
      return nextState;
    case LOGOUT_CURRENT_USER:
      return _nullId;
    default:
      return state;
  }
}
