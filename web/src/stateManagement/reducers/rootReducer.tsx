import { combineReducers } from "redux";
import { authReducer } from './authReducer';
import { usersReducer } from './usersReducer';
import { userThreadsReducer } from './userThreadsState';
import { currentThreadReducer } from './currentThreadReducer';
import { messagesReducer } from './messagesReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    usersState: usersReducer,
    userThreads: userThreadsReducer,
    currentThread: currentThreadReducer,
    messages: messagesReducer
})

export type RootState = ReturnType<typeof rootReducer>