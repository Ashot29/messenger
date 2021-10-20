import { SET_USER_INITIAL_THREADS } from "../actionTypes/userThreadsTypes";
import { IThread } from './../../../services/threads.service';

export const setUserInitialThreads = (threads: IThread[]) => {
    return {
        type: SET_USER_INITIAL_THREADS,
        payload: threads
    }
}