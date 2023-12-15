import { createReducer, on } from '@ngrx/store';

import { GroupsStateInterface } from '../../models/groups-state.interface';
import {
  createGroupSuccessAction,
  deleteGroupSuccessAction,
  groupsErrorAction,
  groupsStateClearAction,
  groupsSubmitBtnDisableAction,
  hideFormAction,
  hidePopupAction,
  loadGroupsSuccessAction,
  showFormAction,
  showPopupAction,
} from '../actions/groups.actions';
import { state } from '@angular/animations';

export const initialSate: GroupsStateInterface = {
  isNewGroupSubmitInProgress: false,
  isShowForm: false,
  isShowDeletePopup: false,
  delGroupId: null,
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
  on(showPopupAction, (state, { delGroupId }) => {
    return {
      ...state,
      isShowDeletePopup: true,
      delGroupId: delGroupId,
    };
  }),
  on(hidePopupAction, state => {
    return {
      ...state,
      isNewGroupSubmitInProgress: false,
      isShowDeletePopup: false,
      delGroupId: null,
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
  }),
  on(deleteGroupSuccessAction, (state, { groupID }) => {
    return {
      ...state,
      isNewGroupSubmitInProgress: false,
      isShowDeletePopup: false,
      delGroupId: null,
      groupList: state.groupList.filter(item => item.id !== groupID),
      errors: null,
    };
  })
);
