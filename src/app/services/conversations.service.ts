import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { ConversationItemResponseInterface } from '../models/conversation-item-responce.interface';
import { ConversationInterface } from '../models/conversation.interface';
import { ConversationIdResponseInterface } from '../models/conversation-id-response.interface';
import { ConversationsResponseInterface } from '../models/conversations-response.interface';
import { ConversationsHistoryResponseInterface } from '../models/conversations-history-response.interface';
import { MessageRequestInterface } from '../models/message-request.interface';
import { MessageResponseInterface } from '../models/message-response.interface';
import { MessageInterface } from '../models/message.interface';

@Injectable({
  providedIn: 'root',
})
export class ConversationsService {
  constructor(private http: HttpClient) {}

  modifyConversation(
    conversation: ConversationItemResponseInterface
  ): ConversationInterface {
    return {
      id: conversation.id.S,
      companionID: conversation.companionID.S,
    };
  }

  modifyMessage(message: MessageResponseInterface): MessageInterface {
    return {
      authorID: message.authorID.S,
      message: message.message.S,
      createdAt: message.createdAt.S,
    };
  }

  createConversation(
    companionId: string
  ): Observable<ConversationIdResponseInterface> {
    return this.http.post<ConversationIdResponseInterface>(
      '/conversations/create',
      {
        companion: companionId,
      }
    );
  }

  loadConversations(): Observable<ConversationsResponseInterface> {
    return this.http.get<ConversationsResponseInterface>('/conversations/list');
  }

  loadConversationHistory(
    conversationID: string,
    since: number | undefined
  ): Observable<ConversationsHistoryResponseInterface> {
    const messagesParams = !since
      ? new HttpParams().set('conversationID', conversationID)
      : new HttpParams()
          .set('conversationID', conversationID)
          .set('since', since as number);

    return this.http.get<ConversationsHistoryResponseInterface>(
      '/conversations/read',
      { params: messagesParams }
    );
  }

  sendMessage(message: MessageRequestInterface): Observable<void> {
    return this.http.post<void>('/conversations/append', message);
  }
}
