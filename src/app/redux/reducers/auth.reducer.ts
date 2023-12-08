import { createReducer, on } from '@ngrx/store';

import { registrationErrorAction, registrationSuccessAction } from '../actions/auth.actions';
import { RegistrationStateInterface } from '../../models/registration-state.interface';

export const initialSate: RegistrationStateInterface = {
  isSubmitInProgress: false,
  isPrimaryDuplicationException: false,
};

export const registrationReducer = createReducer(
  initialSate,
  on(registrationSuccessAction, (state, payload) => {
    console.log(payload);

    return {...state};
    // payload,
  }),
  on(registrationErrorAction, (state, { errorType, errorMessage }) => {
    console.log(`Error Type: ${errorType}, Error Message: ${errorMessage}`);

    return {...state};
  }),
);