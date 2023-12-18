import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ConversationsStateInterface } from '../../models/conversations-state.interface';

export const selectConversationsFeature =
  createFeatureSelector<ConversationsStateInterface>('conversationsState');

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

export const selectConversationTimerValue = createSelector(
  selectConversationsFeature,
  state => state.conversationTimerValue
);

export const selectIsConvRefreshInProgress = createSelector(
  selectConversationsFeature,
  state => state.isRefreshMessagesInProgress
);

export const selectShowPopup = createSelector(
  selectConversationsFeature,
  state => state.isShowPopup
);

export const selectSubmitingProgress = createSelector(
  selectConversationsFeature,
  state => state.isSubmitInProgress
);
