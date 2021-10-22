import { BaseService } from "./base.service";
import { MESSAGES_URL } from "../constants/url";

export interface IMessage {
  message: string
  id: string
  senderId: string
  threadId: string
  createdAt: number
}

export const messagesService = new BaseService("messages", MESSAGES_URL);

messagesService.getThreadMessages = function(threadId: string) {
  return fetch(`${this.url}/${this.prefix}?threadId=${threadId}`).then(resp => resp.json())
}