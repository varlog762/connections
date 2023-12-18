import { AttemptToLoadHistoryItemInterface } from './attempt-to-load-history-item.interface';
import { ConversationHistoryInterface } from './conversation-history.interface';
import { ConversationInterface } from './conversation.interface';
import { ResponseErrorInterface } from './response-error.interface';

export interface ConversationsStateInterface {
  isRefreshMessagesInProgress: boolean;
  wasAttemptToLoadConversations: boolean;
  wasAttemptToLoadConversationHistory: string[];
  conversationsList: ConversationInterface[];
  conversationsHistory: ConversationHistoryInterface[];
  errors: ResponseErrorInterface | null;
  conversationTimerValue: number | null;
}
