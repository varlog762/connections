import { createAction, props } from '@ngrx/store';
import { ModifiedGroupInterface } from '../../models/modified-group.interface';

export const showFormAction = createAction(
  '[Groups Component] Show Form For Create New Group'
);

export const hideFormAction = createAction(
  '[Groups Component] Hide Form For Create New Group'
);

export const loadGroupsAction = createAction(
  '[Groups Component] Load Groups List'
);

export const groupsStateClearAction = createAction('[] Clear Groups State');

export const groupsErrorAction = createAction(
  '[Registration | Login Effect] Registration Error',
  props<{ errorType: string; errorMessage: string }>()
);

export const loadGroupsSuccessAction = createAction(
  '[LoadGroupsEffects] Groups Loading Succsess',
  props<{ groups: ModifiedGroupInterface[] }>()
);

export const groupsSubmitBtnDisableAction = createAction(
  '[Groups Component] Disable Submit Button'
);

export const createNewGroupAction = createAction(
  '[Groups Component] Create New Group',
  props<{
    payload: {
      name: string;
    };
  }>()
);
export const createGroupSuccessAction = createAction(
  '[CreateNewGroupEffects] New Group Created Success',
  props<{
    payload: ModifiedGroupInterface;
  }>()
);