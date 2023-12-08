import { createAction, props } from '@ngrx/store';

import { RegistrationRequestIntrface } from '../../models/registration-request.interface';

export const registrationAction = createAction(
  '[Registration Component] Registration',
  props<RegistrationRequestIntrface>,
);

export const registrationSuccessAction = createAction(
  '[Registration Effect] Registration Success',
);

export const registrationErrorAction = createAction(
  '[Registration Effect] Registration Error',
);
