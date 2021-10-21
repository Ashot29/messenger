import { RESET_USER_THREADS, SET_USER_INITIAL_THREADS, ADD_THREAD_TO_STORE } from "../actionTypes/userThreadsTypes";
import { IThread, threadsService } from './../../../services/threads.service';

export const setUserInitialThreads = (threads: IThread[]) => {
    return {
        type: SET_USER_INITIAL_THREADS,
        payload: threads
    }
}

export const resetUserThreads = () => {
    return {
        type: RESET_USER_THREADS
    }
}

export const addThreadToStore = (thread: any) => {
    return {
        type: ADD_THREAD_TO_STORE,
        payload: thread
    }
}

export const addThread = (threadData: any) => {
    return (dispatch: any) => {
        threadsService.post(threadData)
        .then(data => dispatch(addThreadToStore(data)))
    }
}