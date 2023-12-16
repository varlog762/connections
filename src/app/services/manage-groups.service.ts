import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GroupsResponseInterface } from '../models/groups-response.interface';
import { NewGroupResponseInterface } from '../models/new-group-response.interface';
import { ModifiedGroupInterface } from '../models/modified-group.interface';
import { CurrentUserInterface } from '../models/current-user.interface';
import { GroupDeletingRequestInterface } from '../models/group-deleting-request.interface';
import { GroupResponseInterface } from '../models/group-response.interface';

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
      localStorage.getItem('currentUser') as string
    );

    return {
      id: groupID,
      name: newName,
      createdAt: currentDate,
      createdBy: currentUser['rs-uid'] ?? '',
    };
  }

  deleteGroup(data: GroupDeletingRequestInterface): Observable<void> {
    const groupIdParams = new HttpParams().set('groupID', data.groupID);

    return this.http.delete<void>('/groups/delete', { params: groupIdParams });
  }

  isGroupOwner(groupOwnerId: string): boolean {
    const currentUser: CurrentUserInterface = JSON.parse(
      localStorage.getItem('currentUser') as string
    );

    return currentUser['rs-uid'] === groupOwnerId;
  }

  modifyGroup(group: GroupResponseInterface): ModifiedGroupInterface {
    return {
      id: group.id.S,
      name: group.name.S,
      createdAt: group.createdAt.S,
      createdBy: group.createdBy.S,
    };
  }
}
