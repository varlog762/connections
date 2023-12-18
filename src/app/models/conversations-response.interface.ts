import { ConversationItemResponseInterface } from './conversation-item-responce.interface';

export interface ConversationsResponseInterface {
  Count: 'number';
  Items: ConversationItemResponseInterface[];
}
