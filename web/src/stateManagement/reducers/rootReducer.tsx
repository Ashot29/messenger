import { combineReducers } from "redux";
import { authReducer } from './authReducer';
import { usersReducer } from './usersReducer';
import { userThreadsReducer } from './userThreadsState';
import { currentThreadReducer } from './currentThreadReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    usersState: usersReducer,
    userThreads: userThreadsReducer,
    currentThread: currentThreadReducer
})

export type RootState = ReturnType<typeof rootReducer>