import { createFeatureSelector, createSelector } from '@ngrx/store';

import { RegistrationStateInterface } from '../../models/registration-state.interface';

export const selectAuthFeature = createFeatureSelector<RegistrationStateInterface>('auth');
