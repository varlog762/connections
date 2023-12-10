import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserProfileStateInterface } from '../../models/user-profile-state.interface';

export const selectUserProfileFeature =
  createFeatureSelector<UserProfileStateInterface>('userProfileState');

export const selectIsProfileLoaded = createSelector(
  selectUserProfileFeature,
  state => {
    return state.isProfileLoaded;
  }
);

export const selectUserProfile = createSelector(
  selectUserProfileFeature,
  state => {
    return state.userProfile;
  }
);
