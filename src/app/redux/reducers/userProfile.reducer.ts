import { createReducer, on } from '@ngrx/store';

import { UserProfileStateInterface } from '../../models/user-profile-state.interface';
import {
  loadProfileSuccessAction,
  profileErrorAction,
} from '../actions/user-profile.actions';

export const initialSate: UserProfileStateInterface = {
  isProfileLoaded: false,
  userProfile: null,
  errors: null,
};

export const userProfileReducer = createReducer(
  initialSate,
  on(profileErrorAction, state => {
    return {
      ...state,
    };
  }),
  on(loadProfileSuccessAction, (state, payload) => {
    return {
      ...state,
      // errors: { type: errorType, message: errorMessage },
    };
  })
);
