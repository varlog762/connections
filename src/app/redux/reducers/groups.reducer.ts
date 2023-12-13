import { createReducer, on } from '@ngrx/store';

import { GroupsStateInterface } from '../../models/groups-state.interface';
import {
  groupsErrorAction,
  groupsStateClearAction,
  hideFormAction,
  loadGroupsSuccessAction,
  showFormAction,
} from '../actions/groups.actions';
import { state } from '@angular/animations';

export const initialSate: GroupsStateInterface = {
  isShowForm: false,
  groupList: null,
  errors: null,
};

export const groupsReducer = createReducer(
  initialSate,
  on(showFormAction, state => {
    return {
      ...state,
      isShowForm: true,
    };
  }),
  on(hideFormAction, state => {
    return {
      ...state,
      isShowForm: false,
    };
  }),
  on(groupsStateClearAction, state => initialSate),
  on(groupsErrorAction, (state, { errorType, errorMessage }) => {
    return {
      ...state,
      isNameSet: false,
      errors: {
        type: errorType,
        message: errorMessage,
      },
      // isSubmitInProgress: false,
    };
  }),
  on(loadGroupsSuccessAction, (state, { groups }) => {
    return {
      ...state,
      groupList: groups,
    };
  })
);
