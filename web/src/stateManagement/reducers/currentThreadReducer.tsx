import { SET_THREAD_AS_CURRENT, RESET_CURRENT_THREAD } from "../actions/actionTypes/currentThreadTypes";

const initialState = {
  id: "",
  members: [],
  messages: [],
};

export const currentThreadReducer = (
  state: any = initialState,
  action: any
) => {
  switch (action.type) {
    case SET_THREAD_AS_CURRENT:
      return {
        ...state,
        id: action.payload.id,
        members: action.payload.members,
        messages: action.payload.messages,
      };
    case RESET_CURRENT_THREAD:
      return {
        id: "",
        members: [],
        messages: [],
      };
    default:
      return state;
  }
};
