import { createReducer, on } from '@ngrx/store';

import { registrationErrorAction, registrationSuccessAction, submitBtnDisableAction } from '../actions/auth.actions';
import { AuthStateInterface } from '../../models/auth-state.interface';

export const initialSate: AuthStateInterface = {
  isSubmitInProgress: false,
  duplicatedEmails: [],
  currentUser: null,
  isLogged: null,
  errors: null,
};

export const registrationReducer = createReducer(
  initialSate,
  on(submitBtnDisableAction, (state) => {
    return {
      ...state,
      isSubmitInProgress: true,
    };
  }),
  on(registrationSuccessAction, (state) => {

    return {
      ...state,
      isSubmitInProgress: false,
      duplicatedEmail: null,
      errors: null,
    };
  }),
  on(registrationErrorAction, (state, { errorType, errorMessage, email }) => {
    if(email) {
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
  
);