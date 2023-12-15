import { ModifiedGroupInterface } from './modified-group.interface';
import { ResponseErrorInterface } from './response-error.interface';

export interface GroupsStateInterface {
  isNewGroupSubmitInProgress: boolean;
  isRefreshGroupsInProgress: boolean;
  isShowForm: boolean;
  isShowDeletePopup: boolean;
  delGroupId: string | null;
  groupList: ModifiedGroupInterface[];
  errors: ResponseErrorInterface | null;
  groupsTimerValue: number | null;
  peopleTimerValue: number | null;
}
