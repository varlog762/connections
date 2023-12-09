import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthStateInterface } from '../../models/auth-state.interface';

export const selectAuthFeature = createFeatureSelector<AuthStateInterface>('auth');

export const isSubmitInProgressSelector = createSelector(
  selectAuthFeature,
  (state) => state.isSubmitInProgress
)