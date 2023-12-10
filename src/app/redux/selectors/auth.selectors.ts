import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthStateInterface } from '../../models/auth-state.interface';

export const selectAuthFeature =
  createFeatureSelector<AuthStateInterface>('auth');

export const selectIsSubmitInProgress = createSelector(
  selectAuthFeature,
  state => state.isSubmitInProgress
);

export const selectDuplicatedEmails = createSelector(
  selectAuthFeature,
  state => state.duplicatedEmails
);

export const selectErrorAndDuplicatedEmails = createSelector(
  selectAuthFeature,
  state => ({
    errorType: state.errors?.type,
    duplicatedEmails: state.duplicatedEmails,
  })
);

export const selectIsLogged = createSelector(
  selectAuthFeature,
  state => state.isLogged
);
