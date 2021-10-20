import { SET_ALL_USERS } from "../actionTypes/usersActionTypes"
import { IUser } from './../../../services/users.service';

export const setAllUsers = (users: IUser[]) => {
    return {
        type: SET_ALL_USERS,
        payload: users
    }
}