import { createAction, props } from '@ngrx/store';

export const loadPeopleAction = createAction(
  '[People Component] Load People List',
  props<{ isLoadManual: boolean }>()
);

export const loadCompanionsAction = createAction(
  '[People Component] Load Companion List',
  props<{ isLoadManual: boolean }>()
);

export const peopleErrorAction = createAction(
  '[] People Error',
  props<{ errorType: string; errorMessage: string }>()
);

export const loadPeopleSuccessAction = createAction(
  '[] People List Loading Succsess'
  // props<{ groups: ModifiedGroupInterface[] }>()
);

export const loadCompanionsSuccessAction = createAction(
  '[] Companions List Loading Succsess'
  // props<{ groups: ModifiedGroupInterface[] }>()
);

export const peopleRefreshBtnDisableAction = createAction(
  '[] Disable Refresh People Button'
);

export const groupsRefreshBtnEnableAction = createAction(
  '[Timer Service] Enable Refresh People Button'
);

export const peopleStateClearAction = createAction('[] Clear Groups State');

export const startTimer = createAction('[People Component] Start Timer');

export const decrementPeopleTimerValueAction = createAction(
  '[TimerService] Decrement People Timer Value',
  props<{
    value: number | null;
  }>()
);
