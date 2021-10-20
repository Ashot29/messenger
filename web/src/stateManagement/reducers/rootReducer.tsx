import { combineReducers } from "redux";
import { authReducer } from './authReducer';
import { usersReducer } from './usersReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    usersState: usersReducer,
})

export type RootState = ReturnType<typeof rootReducer>