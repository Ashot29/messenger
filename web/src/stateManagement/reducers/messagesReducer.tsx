import { MESSAGES_LOAD_START, MESSAGES_LOAD_SUCCESS, MESSAGES_LOAD_FAILURE, ADD_MESSAGE, RESET_MESSAGES } from './../actions/actionTypes/messagesTypes';

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
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      }
    case RESET_MESSAGES:
      return {
        messages: [],
        loading: false
      }
    default:
      return state;
  }
};
