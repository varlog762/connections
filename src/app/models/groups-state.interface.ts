import { ModifiedGroupInterface } from './modified-group.interface';
import { ResponseErrorInterface } from './response-error.interface';

export interface GroupsStateInterface {
  isShowForm: boolean;
  groupList: ModifiedGroupInterface[] | null;
  errors: ResponseErrorInterface | null;
}
