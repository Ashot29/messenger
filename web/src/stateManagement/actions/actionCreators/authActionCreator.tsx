import { AUTH_LOADING_END_SUCCESS, AUTH_LOADING_START, AUTH_LOADING_END_FAILURE } from './../actionTypes/authActionTypes';

export const authLoadingStart = () => {
    return {
        type: AUTH_LOADING_START
    }
}

type Token = {
    token: string
}

export const authLoadingEndSuccess = (token: Token) => {
    return {
        type:  AUTH_LOADING_END_SUCCESS,
        payload: token
    }
}

export const authLoadingEndFailure = () => {
    return {
        type:  AUTH_LOADING_END_FAILURE,
    }
}