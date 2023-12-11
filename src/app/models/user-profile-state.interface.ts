import { ProfileResponceInterface } from './profile-response-interface';
import { ResponseErrorInterface } from './response-error.interface';

export interface UserProfileStateInterface {
  isProfileLoaded: boolean;
  userProfile: ProfileResponceInterface | null;
  errors: ResponseErrorInterface | null;
}
