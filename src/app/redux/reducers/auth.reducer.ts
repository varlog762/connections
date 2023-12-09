import { createReducer, on } from '@ngrx/store';

import { registrationErrorAction, registrationSuccessAction, submitBtnDisableAction } from '../actions/auth.actions';
import { AuthStateInterface } from '../../models/auth-state.interface';

export const initialSate: AuthStateInterface = {
  isSubmitInProgress: false,
  isPrimaryDuplicationException: false,
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
      // isSubmitInProgress: false,
      errors: null,
    };
  }),
  on(registrationErrorAction, (state, { errorType, errorMessage }) => {
    console.log(`Error Type: ${errorType}, Error Message: ${errorMessage}`);

    return {
      ...state,
      // isSubmitInProgress: false,
      errors: { type: errorType, message: errorMessage },
    };
  }),
);