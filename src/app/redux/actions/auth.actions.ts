import { createAction, props } from '@ngrx/store';

import { RegistrationRequestIntrface } from '../../models/registration-request.interface';

export const registrationAction = createAction(
  '[Registration Component] Registration',
  props<RegistrationRequestIntrface>,
);

export const registrationSuccessAction = createAction(
  '[Registration Effect] Registration Success',
  props<{ payload: {
    isSubmitInProgress: boolean;
  } }>
);

export const registrationErrorAction = createAction(
  '[Registration Effect] Registration Error',
);
