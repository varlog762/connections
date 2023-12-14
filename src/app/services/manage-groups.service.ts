import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GroupsResponseInterface } from '../models/groups-response.interface';
import { NewGroupResponseInterface } from '../models/new-group-response.interface';
import { ModifiedGroupInterface } from '../models/modified-group.interface';
import { CurrentUserInterface } from '../models/current-user.interface';

@Injectable({
  providedIn: 'root',
})
export class ManageGroupsService {
  constructor(private http: HttpClient) {}

  loadGroups(): Observable<GroupsResponseInterface> {
    return this.http.get<GroupsResponseInterface>('/groups/list');
  }

  createNewGroup(name: object): Observable<NewGroupResponseInterface> {
    return this.http.post<NewGroupResponseInterface>('/groups/create', name);
  }

  createNewGroupObject(
    { groupID }: NewGroupResponseInterface,
    newName: string
  ): ModifiedGroupInterface {
    const currentDate = new Date().getTime();

    const currentUser: CurrentUserInterface = JSON.parse(
      JSON.stringify(localStorage.getItem('currentUser'))
    );

    return {
      id: groupID,
      name: newName,
      createdAt: currentDate,
      createdBy: currentUser['rs-uid'] ?? '',
    };
  }

  isGroupOwner(groupOwnerId: string): boolean {
    const currentUser: CurrentUserInterface = JSON.parse(
      JSON.stringify(localStorage.getItem('currentUser'))
    );

    return currentUser['rs-uid'] === groupOwnerId;
  }
}
