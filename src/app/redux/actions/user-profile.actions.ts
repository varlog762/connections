import { createAction, props } from '@ngrx/store';

import { UserProfileInterface } from '../../models/user-profile.interface';

export const loadUserProfileAction = createAction('[Header] Load UserProfile');

export const hasBeenLoadedAction = createAction(
  '[UserProfileEffects] Profile Has Already Been Loaded'
);

export const updateUsernameAction = createAction(
  '[UserProfileEffects] Update Username',
  props<{ payload: string }>()
);

export const profileErrorAction = createAction(
  '[UserProfileEffects] Profile Loading Error...',
  props<{ errorType: string; errorMessage: string }>()
);

export const loadProfileSuccessAction = createAction(
  '[UserProfileEffects] Profile Loading Succsess',
  props<UserProfileInterface>()
);

export const cancelBtnDisableAction = createAction(
  '[ProfileComponent] Disable Submit Button'
);

export const updateUsernameSuccessAction = createAction(
  '[UpdateUsernameEffects] Update Username Success',
  props<{ name: string }>()
);

export const nameSetTrueAction = createAction(
  '[ProfileComponent] isNameSet Is True'
);

export const nameSetFalseAction = createAction(
  '[ProfileComponent] isNameSet Is False'
);

export const updateUsernameShowMessageAction = createAction(
  '[UpdateUsernameEffects] Show Message If Name Updated Successfully',
  props<{ name: string }>()
);

export const userProfileStateClearAction = createAction(
  '[Header | Profile] Clear User Profile State'
);
