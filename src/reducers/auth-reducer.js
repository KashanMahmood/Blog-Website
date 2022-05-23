/* eslint-disable no-param-reassign */
import { produce } from 'immer';
import { ActionTypes } from '../actions';

const initialState = {
  authenticated: false,
};

const AuthReducer = produce((draftState, action = {}) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      draftState.authenticated = true;
      break;
    case ActionTypes.DEAUTH_USER:
      draftState.authenticated = false;
      break;
    case ActionTypes.AUTH_ERROR:
      draftState.authenticated = false;
      break;
    default:
      break;
  }
}, initialState);

export default AuthReducer;
