import { combineReducers } from "redux";
import { authReducer } from './authReducer';
import { usersReducer } from './usersReducer';
import { userThreadsReducer } from './userThreadsState';

export const rootReducer = combineReducers({
    auth: authReducer,
    usersState: usersReducer,
    userThreads: userThreadsReducer
})

export type RootState = ReturnType<typeof rootReducer>