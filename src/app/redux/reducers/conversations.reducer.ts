import { createReducer, on } from '@ngrx/store';

import { ConversationsStateInterface } from '../../models/conversations-state.interface';
import {
  attemptToLoadConversationHistoryAction,
  attemptToLoadConversationsAction,
  conversationsErrorAction,
  conversationsStateClearAction,
  decrementConvTimerValueAction,
  loadConversationsSuccessAction,
  loadHistorySuccessAction,
} from '../actions/conversations.actions';

export const initialSate: ConversationsStateInterface = {
  isRefreshMessagesInProgress: false,
  wasAttemptToLoadConversations: false,
  wasAttemptToLoadConversationHistory: [],
  conversationsList: [],
  conversationsHistory: [],
  errors: null,
  conversationTimerValue: null,
};

export const conversationsReducer = createReducer(
  initialSate,

  on(conversationsStateClearAction, state => initialSate),
  on(conversationsErrorAction, (state, { errorType, errorMessage }) => {
    return {
      ...state,
      errors: {
        type: errorType,
        message: errorMessage,
      },
    };
  }),
  on(loadConversationsSuccessAction, (state, { conversations }) => {
    return {
      ...state,
      conversationsList: conversations,
      wasAttemptToLoadConversations: true,
    };
  }),
  on(loadHistorySuccessAction, (state, { payload }) => {
    const existingConversation = state.conversationsHistory.find(
      conversation => conversation[payload.conversationID] !== undefined
    );

    const updatedConversation = {
      [payload.conversationID]: payload.messages,
    };

    if (existingConversation) {
      return {
        ...state,
        conversationsHistory: state.conversationsHistory.map(conversation =>
          conversation[payload.conversationID]
            ? {
                ...conversation,
                [payload.conversationID]: [
                  ...(conversation[payload.conversationID] || []),
                  ...payload.messages,
                ],
              }
            : conversation
        ),
      };
    }

    return {
      ...state,
      conversationsHistory: [
        ...state.conversationsHistory,
        updatedConversation,
      ],
    };
  }),
  on(decrementConvTimerValueAction, (state, { value }) => {
    return {
      ...state,
      conversationTimerValue: value,
    };
  }),
  on(attemptToLoadConversationsAction, state => {
    return {
      ...state,
      wasAttemptToLoadConversations: true,
    };
  }),
  on(attemptToLoadConversationHistoryAction, (state, { conversationID }) => {
    if (!state.wasAttemptToLoadConversationHistory.includes(conversationID)) {
      return {
        ...state,
        wasAttemptToLoadConversationHistory: [
          ...state.wasAttemptToLoadConversationHistory,
          conversationID,
        ],
      };
    }

    return {
      ...state,
    };
  })
);
