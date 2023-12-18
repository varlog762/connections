import { createReducer, on } from '@ngrx/store';

import { PeopleStateInerface } from '../../models/people-state.inerface';
import {
  decrementPeopleTimerValueAction,
  loadPeopleSuccessAction,
  peopleErrorAction,
  peopleRefreshBtnDisableAction,
  peopleRefreshBtnEnableAction,
  peopleStateClearAction,
} from '../actions/people.actions';

export const initialSate: PeopleStateInerface = {
  isRefreshPeopleInProgress: false,
  peopleList: [],
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
  on(peopleRefreshBtnDisableAction, state => {
    return {
      ...state,
      isRefreshPeopleInProgress: true,
    };
  }),
  on(peopleRefreshBtnDisableAction, state => {
    return { ...state, isRefreshPeopleInProgress: true };
  }),
  on(peopleRefreshBtnEnableAction, state => {
    return { ...state, isRefreshPeopleInProgress: false };
  }),
  on(decrementPeopleTimerValueAction, (state, { value }) => {
    return {
      ...state,
      peopleTimerValue: value,
    };
  })
);
