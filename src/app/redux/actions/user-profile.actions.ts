import { createAction, props } from '@ngrx/store';

import { ProfileResponceInterface } from '../../models/profile-response-interface';

export const loadUserProfileAction = createAction('[Header] Load UserProfile');

export const profileErrorAction = createAction(
  '[UserProfileEffects] Profile Loading Error...'
  // props<{ errorType: string; errorMessage: string }>()
);

export const loadProfileSuccessAction = createAction(
  '[UserProfileEffects] Profile Loading Succsess',
  props<ProfileResponceInterface>()
);

export const testAction = createAction('[UserProfileEffects] Test');
