import { AuthStateInterface } from './auth-state.interface';
import { UserProfileStateInterface } from './user-profile-state.interface';

export interface AppStateInterface {
  authState: AuthStateInterface;
  userProfileState: UserProfileStateInterface;
}
