import { BaseService } from "./base.service";
import { MESSAGES_URL } from "../constants/url";

export interface IThread {
  id: string;
  members: string[];
  messages: string[];
}

export const threadsService = new BaseService("threads", MESSAGES_URL);

threadsService.getUserThreads = function (userId) {
  return fetch(`${this.url}/${this.prefix}?q=${userId}`).then((resp) =>
    resp.json()
  );
};
