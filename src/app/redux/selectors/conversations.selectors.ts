import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ConversationsStateInterface } from '../../models/conversations-state.interface';

export const selectConversationsFeature =
  createFeatureSelector<ConversationsStateInterface>('conversationsState');

export const selectAttemptToLoadConversationHistory = createSelector(
  selectConversationsFeature,
  state => state.wasAttemptToLoadConversationHistory
);

export const selectAttemptToLoadConversations = createSelector(
  selectConversationsFeature,
  state => state.wasAttemptToLoadConversations
);

export const selectConversationsList = createSelector(
  selectConversationsFeature,
  state => state.conversationsList
);

export const selectConversationsHistoryList = createSelector(
  selectConversationsFeature,
  state => state.conversationsHistory
);
