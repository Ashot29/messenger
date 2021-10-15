import { BaseService } from "./base.service";
import { USER_URL } from './../constants/url';

export interface IUser {
    userName: string
    password: string
    email: string
}

export const usersService = new BaseService('users', USER_URL);

usersService.checkEmail = function(email: string) {
    return fetch(`${this.url}/${this.prefix}?email=${email}`).then(resp => resp.json())
}