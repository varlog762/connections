import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserProfileStateInterface } from '../../models/user-profile-state.interface';

export const selectUserProfileFeature =
  createFeatureSelector<UserProfileStateInterface>('userProfileState');

export const selectUserProfile = createSelector(
  selectUserProfileFeature,
  state => {
    return state.userProfile;
  }
);

export const selectIsNameSet = createSelector(
  selectUserProfileFeature,
  state => {
    return state.isNameSet;
  }
);

export const selectUserProfileErrors = createSelector(
  selectUserProfileFeature,
  state => {
    return state.errors;
  }
);

export const selectIsProfileSubmitingInProgress = createSelector(
  selectUserProfileFeature,
  state => {
    return state.isSubmitInProgress;
  }
);
