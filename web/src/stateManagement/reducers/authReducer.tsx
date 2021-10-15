import { AUTH_LOADING_START } from './../actions/actionTypes/authActionTypes';
import { AUTH_LOADING_END } from '../actions/actionTypes/authActionTypes';

const initialState = {
  token: "",
  isAuth: false,
  loading: false,
};

interface IAuth {
  token: string;
  isAuth: boolean;
  loading: boolean;
}

export const authReducer = (state: IAuth = initialState, action) => {
  switch (action.type) {
    case AUTH_LOADING_START:
      return {
        ...state,
        loading: true,
      };
    case AUTH_LOADING_END:
      return {
        ...state,
        loading: false,
      };
    default: return state
  }
};
