import { MessageInterface } from './message.interface';

export interface ConversationHistoryInterface {
  [conversationID: string]: MessageInterface[];
}
