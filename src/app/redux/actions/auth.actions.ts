import { createAction, props } from '@ngrx/store';

import { RegistrationRequestIntrface } from '../../models/registration-request.interface';
import { LoginResponseInterface } from '../../models/login-response.interface';

export const registrationAction = createAction(
  '[Registration Component] Registration In Progress...',
  props<RegistrationRequestIntrface>(),
);

export const submitBtnDisableAction = createAction(
  '[Registration Component | login Component] Disable Submit Button',
);

export const regRedirectAndShowMessageAction = createAction(
  '[Registration Effect] Redirect To Sign In & Show Message',
);

export const registrationSuccessAction = createAction(
  '[Registration Effect] Registration Success',
  props<{ payload: object }>(),
);

export const registrationErrorAction = createAction(
  '[Registration Effect] Registration Error',
  props<{ errorType: string; errorMessage: string; email: string | null }>(),
);

export const regRedirectionSuccessAction = createAction(
  '[registrationSuccessEffects] Do Nothing...',
);

export const loginAction = createAction(
  '[Login Component] Login In Progress...',
  props<RegistrationRequestIntrface>(),
);

export const loginSuccessAction = createAction(
  '[Login Component] Login Success',
  props<{ payload: LoginResponseInterface }>(),
);

export const loginErrorAction = createAction(
  '[Login Component] Login Error',
  props<{ errorType: string; errorMessage: string; email: string | null }>(),
);