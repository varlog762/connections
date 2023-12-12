import { ResponseErrorInterface } from './response-error.interface';
import { UserProfileInterface } from './user-profile.interface';

export interface UserProfileStateInterface {
  isNameSet: boolean;
  isSubmitInProgress: boolean;
  userProfile: UserProfileInterface | null;
  errors: ResponseErrorInterface | null;
}
