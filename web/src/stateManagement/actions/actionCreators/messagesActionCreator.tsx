import { MESSAGES_LOAD_START, MESSAGES_LOAD_SUCCESS, MESSAGES_LOAD_FAILURE, ADD_MESSAGE } from '../actionTypes/messagesTypes';
import { IMessage } from './../../../services/messages.service';
import { RESET_MESSAGES } from './../actionTypes/messagesTypes';

export const messagesLoadStart = () => {
    return {
        type: MESSAGES_LOAD_START
    }
}

export const messagesLoadSuccess = (messages: IMessage[]) => {
    return {
        type: MESSAGES_LOAD_SUCCESS,
        payload: messages
    }
}

export const messagesLoadFailure = () => {
    return {
        type: MESSAGES_LOAD_FAILURE
    }
}

export const addMessage = (message: any) => {
    return {
        type: ADD_MESSAGE,
        payload: message
    }
}

export const resetMessages = () => {
    return {
        type: RESET_MESSAGES
    }
}