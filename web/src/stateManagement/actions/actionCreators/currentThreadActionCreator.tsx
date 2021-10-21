import { SET_THREAD_AS_CURRENT, RESET_CURRENT_THREAD } from "../actionTypes/currentThreadTypes";
import { IThread } from './../../../services/threads.service';

export const setThreadAsCurrent = (thread: IThread) => {
    return {
        type: SET_THREAD_AS_CURRENT,
        payload: thread
    }
}

export const resetCurrentThread = () => {
    return {
        type: RESET_CURRENT_THREAD
    }
}