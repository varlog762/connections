import { MessageResponseInterface } from './message-response.interface';

export interface ConversationsHistoryResponseInterface {
  Count: 'number';
  Items: MessageResponseInterface[];
}
