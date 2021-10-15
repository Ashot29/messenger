import { AUTH_LOADING_START } from './../actionTypes/authActionTypes';
import { AUTH_LOADING_END } from '../actionTypes/authActionTypes';

export const authLoadingStart = () => {
    return {
        type: AUTH_LOADING_START
    }
}

export const authLoadingEnd = () => {
    return {
        type:  AUTH_LOADING_END
    }
}