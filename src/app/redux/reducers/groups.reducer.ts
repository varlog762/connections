import { createReducer, on } from '@ngrx/store';

import { GroupsStateInterface } from '../../models/groups-state.interface';
import {
  createGroupSuccessAction,
  groupsErrorAction,
  groupsStateClearAction,
  groupsSubmitBtnDisableAction,
  hideFormAction,
  loadGroupsSuccessAction,
  showFormAction,
} from '../actions/groups.actions';

export const initialSate: GroupsStateInterface = {
  isNewGroupSubmitInProgress: false,
  isShowForm: false,
  groupList: [],
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
      isNewGroupSubmitInProgress: false,
      isNameSet: false,
      errors: {
        type: errorType,
        message: errorMessage,
      },
    };
  }),
  on(loadGroupsSuccessAction, (state, { groups }) => {
    return {
      ...state,
      isNewGroupSubmitInProgress: false,
      groupList: groups,
    };
  }),
  on(groupsSubmitBtnDisableAction, state => {
    return {
      ...state,
      isNewGroupSubmitInProgress: true,
    };
  }),
  on(createGroupSuccessAction, (state, { payload }) => {
    const newGroupItem = {
      id: payload.id,
      name: payload.name,
      createdAt: payload.createdAt,
      createdBy: payload.createdBy,
    };

    return {
      ...state,
      groupList: [...state.groupList, newGroupItem] || [],
      isNewGroupSubmitInProgress: false,
    };
  })
);
