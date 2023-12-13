import { createReducer, on } from '@ngrx/store';

import { GroupsStateInterface } from '../../models/groups-state.interface';
import {
  groupsStateClearAction,
  hideFormAction,
  showFormAction,
} from '../actions/groups.actions';

export const initialSate: GroupsStateInterface = {
  isShowForm: false,
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
  on(groupsStateClearAction, state => initialSate)
);
