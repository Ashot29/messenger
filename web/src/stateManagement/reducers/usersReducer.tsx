import { SET_ALL_USERS } from '../actions/actionTypes/usersTypes';
import { RESET_INITIAL_USER_STATE } from '../actions/actionTypes/usersTypes';

const initialState = {
    users: []
}

export const usersReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case SET_ALL_USERS:
      return {
        ...state,
        users: action.payload
      };
    case RESET_INITIAL_USER_STATE:
      return {
        users: []
      }
    default:
      return state;
  }
};
