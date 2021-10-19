import {
  AUTH_LOADING_START,
  AUTH_LOADING_END_SUCCESS,
  AUTH_LOADING_END_FAILURE,
} from "./../actions/actionTypes/authActionTypes";

const initialState = {
  token: "",
  isAuth: false,
  loading: false,
  id: "",
  userName: "",
  email: "",
};

interface IAuth {
  id: string;
  token: string;
  isAuth: boolean;
  loading: boolean;
  userName: string;
  email: string;
}

export const authReducer = (state: IAuth = initialState, action: any) => {
  switch (action.type) {
    case AUTH_LOADING_START:
      return {
        ...state,
        loading: true,
      };
    case AUTH_LOADING_END_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        userName: action.payload.userName,
        email: action.payload.email,
        id: action.payload.id,
        isAuth: true,
      };
    case AUTH_LOADING_END_FAILURE:
      return {
        ...state,
        loading: false,
        token: "",
        isAuth: false,
        id: "",
        userName: "",
        email: "",
      };
    default:
      return state;
  }
};
