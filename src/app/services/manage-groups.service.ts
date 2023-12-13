import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GroupsResponseInterface } from '../models/groups-response.interface';

@Injectable({
  providedIn: 'root',
})
export class ManageGroupsService {
  constructor(private http: HttpClient) {}

  loadGroups(): Observable<GroupsResponseInterface> {
    return this.http.get<GroupsResponseInterface>('/groups/list');
  }
}
