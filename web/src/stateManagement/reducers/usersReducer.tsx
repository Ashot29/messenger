import { SET_ALL_USERS } from './../actions/actionTypes/usersActionTypes';

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
    default:
      return state;
  }
};
