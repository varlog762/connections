import { createReducer, on } from '@ngrx/store';

import {
  authErrorAction,
  loginSuccessAction,
  registrationSuccessAction,
  submitBtnDisableAction,
} from '../actions/auth.actions';
import { UserProfileStateInterface } from '../../models/user-profile-state.interface';

export const initialSate: UserProfileStateInterface = {
  isProfileLoaded: false,
  userProfile: null,
};

export const userProfileReducer = createReducer(
  initialSate,
  on(submitBtnDisableAction, state => {
    return {
      ...state,
      isSubmitInProgress: true,
    };
  })
);
