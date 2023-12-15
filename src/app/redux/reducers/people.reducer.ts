import { createReducer, on } from '@ngrx/store';

import { PeopleStateInerface } from '../../models/people-state.inerface';
import {
  decrementPeopleTimerValueAction,
  loadCompanionsSuccessAction,
  loadPeopleSuccessAction,
  peopleErrorAction,
  peopleRefreshBtnDisableAction,
  peopleStateClearAction,
} from '../actions/people.actions';

export const initialSate: PeopleStateInerface = {
  isRefreshPeopleInProgress: false,
  peopleList: [],
  companionsList: [],
};

export const peopleReducer = createReducer(
  initialSate,

  on(peopleStateClearAction, state => initialSate),
  on(peopleErrorAction, (state, { errorType, errorMessage }) => {
    return {
      ...state,
      errors: {
        type: errorType,
        message: errorMessage,
      },
    };
  }),
  // on(loadPeopleSuccessAction, (state, { groups }) => {
  //   return {
  //     ...state,
  //     isNewGroupSubmitInProgress: false,
  //     groupList: groups,
  //   };
  // }),
  // on(loadCompanionsSuccessAction, (state, { groups }) => {
  //   return {
  //     ...state,
  //     isNewGroupSubmitInProgress: false,
  //     groupList: groups,
  //   };
  // }),
  on(peopleRefreshBtnDisableAction, state => {
    return {
      ...state,
      isRefreshPeopleInProgress: true,
    };
  }),
  on(peopleRefreshBtnDisableAction, state => {
    return { ...state, isRefreshGroupsInProgress: false };
  }),
  on(decrementPeopleTimerValueAction, (state, { value }) => {
    return {
      ...state,
      peopleTimerValue: value,
    };
  })
);
