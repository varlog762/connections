import { createAction, props } from '@ngrx/store';

import { RegistrationRequestIntrface } from '../../models/registration-request.interface';

export const registrationAction = createAction(
  '[Registration Component] Registration',
  props<RegistrationRequestIntrface>(),
);

export const submitBtnDisableAction = createAction(
  '[Registration Component | login Component] Disable Submit Button',
);

export const registrationSuccessAction = createAction(
  '[Registration Effect] Registration Success',
  // props<{ isSubmitInProgress: boolean }>(),
  props<{ payload: object }>(),
);

export const registrationErrorAction = createAction(
  '[Registration Effect] Registration Error',
  props<{ errorType: string; errorMessage: string }>(),
);
