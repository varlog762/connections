import { createReducer, on } from '@ngrx/store';

import { PeopleStateInerface } from '../../models/people-state.inerface';
import {
  attemptToLoadCompanionsAction,
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
  wasAttemptToLoadCompanions: false,
  companionsList: [],
  errors: null,
  peopleTimerValue: null,
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
  on(loadPeopleSuccessAction, (state, { people }) => {
    return {
      ...state,
      peopleList: people,
    };
  }),
  on(loadCompanionsSuccessAction, (state, { companions }) => {
    return {
      ...state,
      companionsList: companions,
      wasAttemptToLoadCompanions: true,
    };
  }),
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
  }),
  on(attemptToLoadCompanionsAction, state => {
    return {
      ...state,
      wasAttemptToLoadCompanions: true,
    };
  })
);
