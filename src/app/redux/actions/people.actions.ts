import { createAction, props } from '@ngrx/store';

import { ModifiedPersonInterface } from '../../models/modified-person.interface';

export const loadPeopleAction = createAction(
  '[People Component] Load People List',
  props<{ isLoadManual: boolean }>()
);

export const peopleErrorAction = createAction(
  '[Load People | Load Conversations] People Error',
  props<{ errorType: string; errorMessage: string }>()
);

export const loadPeopleSuccessAction = createAction(
  '[LoadPeopleEffects] People List Loading Succsess',
  props<{ people: ModifiedPersonInterface[] }>()
);

export const peopleRefreshBtnDisableAction = createAction(
  '[PeopleComponent] Disable Refresh People Button'
);

export const peopleRefreshBtnEnableAction = createAction(
  '[PeopleComponent] Enable Refresh People Button'
);

export const groupsRefreshBtnEnableAction = createAction(
  '[Timer Service] Enable Refresh People Button'
);

export const peopleStateClearAction = createAction(
  '[Logout] Clear Groups State'
);

export const startTimerAction = createAction('[People Component] Start Timer');

export const decrementPeopleTimerValueAction = createAction(
  '[TimerService] Decrement People Timer Value',
  props<{
    value: number | null;
  }>()
);
