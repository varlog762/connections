import { Injectable } from '@angular/core';

import { GroupResponseInterface } from '../models/group-response.interface';
import { ModifiedGroupInterface } from '../models/modified-group.interface';

@Injectable({
  providedIn: 'root',
})
export class ModifyDefaultGroupService {
  modifyGroup(group: GroupResponseInterface): ModifiedGroupInterface {
    return {
      id: group.id.S,
      name: group.name.S,
      createdAt: group.createdAt.S,
      createdBy: group.createdBy.S,
      isMyGroup: false,
    };
  }
}
