import { BaseService } from "./base.service";
import { USER_URL } from './../constants/url';

export interface IUser {
    userName: string
    password: string
    email: string
}

export const usersService = new BaseService('users', USER_URL)