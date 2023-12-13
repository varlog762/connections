import { createAction } from '@ngrx/store';

export const showFormAction = createAction(
  '[Groups Component] Show Form For Create New Group'
);

export const hideFormAction = createAction(
  '[Groups Component] Hide Form For Create New Group'
);

export const loadGroupsOnInitAction = createAction(
  '[Groups Component] Load Groups List On Init'
);

export const groupsStateClearAction = createAction('[] Clear Groups State');
