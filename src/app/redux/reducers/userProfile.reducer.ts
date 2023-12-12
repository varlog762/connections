import { createReducer, on } from '@ngrx/store';

import { UserProfileStateInterface } from '../../models/user-profile-state.interface';
import {
  cancelBtnDisableAction,
  loadProfileSuccessAction,
  nameSetFalseAction,
  nameSetTrueAction,
  profileErrorAction,
  updateUsernameSuccessAction,
  userProfileStateClear,
} from '../actions/user-profile.actions';
import { UserProfileInterface } from '../../models/user-profile.interface';

export const initialSate: UserProfileStateInterface = {
  isNameSet: false,
  isSubmitInProgress: false,
  userProfile: null,
  errors: null,
};

export const userProfileReducer = createReducer(
  initialSate,
  on(profileErrorAction, (state, { errorType, errorMessage }) => {
    return {
      ...state,
      isNameSet: false,
      errors: {
        type: errorType,
        message: errorMessage,
      },
      isSubmitInProgress: false,
    };
  }),
  on(loadProfileSuccessAction, (state, payload: UserProfileInterface) => {
    return {
      ...state,
      isNameSet: false,
      userProfile: {
        email: payload.email,
        uid: payload.uid,
        name: payload.name,
        createdAt: payload.createdAt,
      },
      errors: null,
    };
  }),
  on(cancelBtnDisableAction, state => {
    return {
      ...state,
      isSubmitInProgress: true,
    };
  }),
  on(updateUsernameSuccessAction, (state, { name }) => {
    return {
      ...state,
      isNameSet: false,
      isSubmitInProgress: false,
      userProfile: {
        email: state.userProfile!.email,
        uid: state.userProfile!.uid,
        name: name,
        createdAt: state.userProfile!.createdAt,
      },
      errors: null,
    };
  }),
  on(nameSetTrueAction, state => {
    return {
      ...state,
      isNameSet: true,
    };
  }),
  on(nameSetFalseAction, state => {
    return {
      ...state,
      isNameSet: false,
    };
  }),
  on(userProfileStateClear, state => initialSate)
);
