import { ProfileResponceInterface } from './profile-response-interface';

export interface UserProfileStateInterface {
  isProfileLoaded: boolean;
  userProfile: ProfileResponceInterface | null;
}
