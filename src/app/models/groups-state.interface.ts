import { ModifiedGroupInterface } from './modified-group.interface';
import { ResponseErrorInterface } from './response-error.interface';

export interface GroupsStateInterface {
  isNewGroupSubmitInProgress: boolean;
  isShowForm: boolean;
  groupList: ModifiedGroupInterface[];
  errors: ResponseErrorInterface | null;
}
