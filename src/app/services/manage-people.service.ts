import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { PeopleResponseInterface } from '../models/people-response.inetrface';
import { CompanionsResponseInterface } from '../models/companions-response.interface';
import { PersonItemResponseInterface } from '../models/person-item-response.interface';
import { ModifiedPersonInterface } from '../models/modified-person.interface';
import { CompanionItemResponseInterface } from '../models/companion-item-response.interface';
import { ModifiedCompanionInterface } from '../models/modified-companion.interface';
import { CurrentUserInterface } from '../models/current-user.interface';

@Injectable({
  providedIn: 'root',
})
export class ManagePeopleService {
  constructor(private http: HttpClient) {}

  loadPeople(): Observable<PeopleResponseInterface> {
    return this.http.get<PeopleResponseInterface>('/users');
  }

  loadCompanions(): Observable<CompanionsResponseInterface> {
    return this.http.get<CompanionsResponseInterface>('/conversations/list');
  }

  modifyPerson(person: PersonItemResponseInterface): ModifiedPersonInterface {
    return {
      name: person.name.S,
      uid: person.uid.S,
    };
  }

  modifyCompanion(
    companion: CompanionItemResponseInterface
  ): ModifiedCompanionInterface {
    return {
      id: companion.id.S,
      companionID: companion.companionID.S,
    };
  }

  isNotCurrentUser(id: string): boolean {
    const currentUser: CurrentUserInterface = JSON.parse(
      localStorage.getItem('currentUser') as string
    );

    return currentUser['rs-uid'] !== id;
  }
}
