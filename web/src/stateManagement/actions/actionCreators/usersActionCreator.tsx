import { RESET_INITIAL_USER_STATE, SET_ALL_USERS } from "../actionTypes/usersTypes"
import { IUser } from './../../../services/users.service';

export const setAllUsers = (users: IUser[]) => {
    return {
        type: SET_ALL_USERS,
        payload: users
    }
}

export const resetInitialUserState = () => {
    return {
        type: RESET_INITIAL_USER_STATE
    }
}