import { createAction, props } from '@ngrx/store';
import { ConversationInterface } from '../../models/conversation.interface';
import { MessageInterface } from '../../models/message.interface';

export const loadConversationsAction = createAction(
  '[People Component] Load Conversations List'
);

export const loadConversationHistoryAction = createAction(
  '[Conversation Component] Load Messages History',
  props<{
    payload: {
      conversationID: string;
      since: number | undefined;
      isLoadManual: boolean;
    };
  }>()
);

export const loadHistorySuccessAction = createAction(
  '[LoadConversationHistoryEffects] History Loaded Success',
  props<{ payload: { conversationID: string; messages: MessageInterface[] } }>()
);

export const loadConversationsSuccessAction = createAction(
  '[LoadConversationsEffects] Conversations List Loading Succsess',
  props<{ conversations: ConversationInterface[] }>()
);

export const createConversationAction = createAction(
  '[PersonItemComponent] Create Conversation',
  props<{ payload: string }>()
);

export const createConversationSuccessAction = createAction(
  '[PersonItemComponent] Create Conversation Success',
  props<{ payload: ConversationInterface }>()
);

export const sendConversationMessageAction = createAction(
  '[Conversation Component] Send Message',
  props<{
    payload: {
      createdAt: string | number;
      authorID: string;
      conversationID: string;
      message: string;
      since: number | undefined;
    };
  }>()
);

export const sendConversationMessageSuccessAction = createAction(
  '[Conversation Component] Send Message Success',
  props<{
    payload: {
      createdAt: string | number;
      authorID: string;
      conversationID: string;
      message: string;
    };
  }>()
);

export const decrementConvTimerValueAction = createAction(
  '[TimerService] Decrement Conversation Timer Value',
  props<{
    value: number | null;
  }>()
);

export const attemptToLoadConversationsAction = createAction(
  '[LoadConversationsEffects] Attempt To Load Conversations'
);

export const conversationsErrorAction = createAction(
  '[Conversations] Conversation Error',
  props<{ errorType: string; errorMessage: string }>()
);

export const conversationsStateClearAction = createAction(
  '[Logout] Clear Conversations State'
);

export const conversationRefreshBtnDisableAction = createAction(
  '[ConversationComponent] Disable Refresh Conversation Button'
);

export const conversationRefreshBtnEnableAction = createAction(
  '[TimerService] Enable Refresh Conversation Button'
);

export const deleteConversationAction = createAction(
  '[Conversation Component] Delete This Conversation',
  props<{ conversationID: string }>()
);

export const deleteConversationSuccessAction = createAction(
  '[Delete Conversation Effects] Conversation Deleted Success',
  props<{ conversationID: string }>()
);

export const convSubmitBtnDesableAction = createAction(
  '[Conversation Component] Desable Submit Button'
);

export const hidePopupAction = createAction(
  '[Conversation Component] Hide Delete Conversation Popup'
);

export const showPopupAction = createAction(
  '[Conversation Component] Show Delete Conversation Popup'
);
