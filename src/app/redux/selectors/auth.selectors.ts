import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthStateInterface } from '../../models/auth-state.interface';

export const selectAuthFeature = createFeatureSelector<AuthStateInterface>('auth');

export const isSubmitInProgressSelector = createSelector(
  selectAuthFeature,
  (state) => state.isSubmitInProgress
)

export const duplicatedEmailsSelector = createSelector(
  selectAuthFeature,
  (state) => state.duplicatedEmails
)

export const errorAndDuplicatedEmailsSelector = createSelector(
  selectAuthFeature,
  (state) => ({
    errorType: state.errors?.type,
    duplicatedEmails: state.duplicatedEmails,
  })
)