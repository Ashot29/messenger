import { MESSAGES_LOAD_START, MESSAGES_LOAD_SUCCESS, MESSAGES_LOAD_FAILURE } from './../actions/actionTypes/messagesTypes';

const initialState = {
  messages: [],
  loading: false,
};

export const messagesReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case MESSAGES_LOAD_START:
      return {
        ...state,
        loading: true,
      };
    case MESSAGES_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        messages: [...state.messages, ...action.payload],
      };
    case MESSAGES_LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        messages: [...state.messages],
      };
    default:
      return state;
  }
};
