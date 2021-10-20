import { SET_USER_INITIAL_THREADS } from "../actions/actionTypes/userThreadsTypes";

const initialState = {
    threads: []
}

export const userThreadsReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case SET_USER_INITIAL_THREADS:
        return {
            ...state,
            threads: action.payload
        }
    default:
      return state;
  }
};