import { createReducer, on } from '@ngrx/store';

import { ConversationsStateInterface } from '../../models/conversations-state.interface';
import {
  attemptToLoadConversationsAction,
  convSubmitBtnDesableAction,
  conversationRefreshBtnDisableAction,
  conversationRefreshBtnEnableAction,
  conversationsErrorAction,
  conversationsStateClearAction,
  decrementConvTimerValueAction,
  deleteConversationSuccessAction,
  hidePopupAction,
  loadConversationsSuccessAction,
  loadHistorySuccessAction,
  showPopupAction,
} from '../actions/conversations.actions';

export const initialSate: ConversationsStateInterface = {
  isRefreshMessagesInProgress: false,
  wasAttemptToLoadConversations: false,
  conversationsList: [],
  conversationsHistory: [],
  errors: null,
  conversationTimerValue: null,
  isShowPopup: false,
  isSubmitInProgress: false,
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
  on(conversationRefreshBtnEnableAction, state => {
    return {
      ...state,
      isRefreshMessagesInProgress: false,
    };
  }),
  on(conversationRefreshBtnDisableAction, state => {
    return {
      ...state,
      isRefreshMessagesInProgress: true,
    };
  }),
  on(convSubmitBtnDesableAction, state => {
    return {
      ...state,
      isSubmitInProgress: true,
    };
  }),
  on(showPopupAction, state => {
    return {
      ...state,
      isShowPopup: true,
    };
  }),
  on(hidePopupAction, state => {
    return {
      ...state,
      isShowPopup: false,
    };
  }),
  on(deleteConversationSuccessAction, (state, { conversationID }) => {
    return {
      ...state,
      conversationsList: state.conversationsList.filter(
        item => item.id !== conversationID
      ),
      isShowPopup: false,
      isSubmitInProgress: false,
    };
  })
);
