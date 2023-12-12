import { createReducer, on } from '@ngrx/store';

import {
  authErrorAction,
  authStateClearAction,
  loginSuccessAction,
  logoutBtnDisableAction,
  registrationSuccessAction,
  submitBtnDisableAction,
} from '../actions/auth.actions';
import { AuthStateInterface } from '../../models/auth-state.interface';

export const initialSate: AuthStateInterface = {
  isSubmitInProgress: false,
  duplicatedEmails: [],
  currentUser: null,
  isLogged: null,
  errors: null,
};

export const authReducer = createReducer(
  initialSate,
  on(submitBtnDisableAction, state => {
    return {
      ...state,
      isSubmitInProgress: true,
    };
  }),
  on(logoutBtnDisableAction, state => {
    return {
      ...state,
      isSubmitInProgress: true,
    };
  }),
  on(registrationSuccessAction, state => {
    return {
      ...state,
      isSubmitInProgress: false,
      errors: null,
    };
  }),
  on(authErrorAction, (state, { errorType, errorMessage, email }) => {
    if (email) {
      return {
        ...state,
        isSubmitInProgress: false,
        duplicatedEmails: [...state.duplicatedEmails, email],
        errors: { type: errorType, message: errorMessage },
      };
    }

    return {
      ...state,
      isSubmitInProgress: false,
      errors: { type: errorType, message: errorMessage },
    };
  }),
  on(loginSuccessAction, (state, { payload }) => {
    return {
      ...state,
      isSubmitInProgress: false,
      isLogged: true,
      errors: null,
      currentUser: {
        'rs-email': payload['rs-email'],
        'rs-uid': payload['rs-uid'],
        Authorization: payload.Authorization,
      },
    };
  }),
  on(authStateClearAction, state => initialSate)
);
