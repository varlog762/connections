import { createReducer, on } from '@ngrx/store';

import { registrationSuccessAction } from '../actions/auth.actions';
import { RegistrationStateInterface } from '../../models/registration-state.interface';

export const initialSate: RegistrationStateInterface = {
  isSubmitInProgress: false,
  isPrimaryDuplicationException: false,
};

export const registrationReducer = createReducer(
  initialSate,
  on(registrationSuccessAction, (state, payload) => ({
    ...state,
    payload,
  })),
  // on(deleteCustomCardAction, (state, { id }): string[] => state.filter((cardId) => cardId !== id)),
);