import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { PeopleResponseInterface } from '../models/people-response.inetrface';
import { PersonItemResponseInterface } from '../models/person-item-response.interface';
import { ModifiedPersonInterface } from '../models/modified-person.interface';
import { CurrentUserInterface } from '../models/current-user.interface';
import { ConversationsResponseInterface } from '../models/conversations-response.interface';
import { ConversationsHistoryResponseInterface } from '../models/conversations-history-response.interface';

@Injectable({
  providedIn: 'root',
})
export class ManagePeopleService {
  constructor(private http: HttpClient) {}

  loadPeople(): Observable<PeopleResponseInterface> {
    return this.http.get<PeopleResponseInterface>('/users');
  }

  loadConversations(): Observable<ConversationsResponseInterface> {
    return this.http.get<ConversationsResponseInterface>('/conversations/list');
  }

  loadConversationHistory(
    conversationID: string
  ): Observable<ConversationsHistoryResponseInterface> {
    return this.http.get<ConversationsHistoryResponseInterface>(
      '/conversations/read'
    );
  }

  modifyPerson(person: PersonItemResponseInterface): ModifiedPersonInterface {
    return {
      name: person.name.S,
      uid: person.uid.S,
    };
  }

  isNotCurrentUser(id: string): boolean {
    const currentUser: CurrentUserInterface = JSON.parse(
      localStorage.getItem('currentUser') as string
    );

    return currentUser['rs-uid'] !== id;
  }
}
