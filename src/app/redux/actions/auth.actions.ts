import { createAction, props } from '@ngrx/store';

import { RegistrationRequestIntrface } from '../../models/registration-request.interface';
import { LoginRequestInterface } from '../../models/login-request.interface';
import { CurrentUserInterface } from '../../models/current-user.interface';

export const registrationAction = createAction(
  '[Registration Component] Registration In Progress...',
  props<RegistrationRequestIntrface>()
);

export const submitBtnDisableAction = createAction(
  '[Registration | login Component] Disable Submit Button'
);

export const regRedirectAndShowMessageAction = createAction(
  '[Registration Effect] Redirect To Sign In & Show Message'
);

export const registrationSuccessAction = createAction(
  '[Registration Effect] Registration Success',
  props<{ payload: object }>()
);

export const regRedirectionSuccessAction = createAction(
  '[registrationSuccessEffects] Do Nothing...'
);

export const loginAction = createAction(
  '[Login Component] Login In Progress...',
  props<LoginRequestInterface>()
);

export const loginSuccessAction = createAction(
  '[Login Component] Login Success',
  props<{ payload: CurrentUserInterface }>()
);

export const authErrorAction = createAction(
  '[Registration | Login Effect] Registration Error',
  props<{ errorType: string; errorMessage: string; email: string | null }>()
);

export const doLogoutAction = createAction('[Header | Profile] Do Logout');

export const logoutShowMessageAndClearState = createAction(
  '[LogoutEffects] User Session Delete: Show Message & Clear State'
);

export const authStateClearAction = createAction(
  '[Header | Profile] Clear Auth State'
);

export const logoutBtnDisableAction = createAction(
  '[Header | Profile] Disable Logout Button'
);
