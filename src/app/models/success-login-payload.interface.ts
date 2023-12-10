import { LoginResponseInterface } from './login-response.interface';

export interface SuccessUserLoginPayloadInterface {
  currentUser: LoginResponseInterface;
  isSubmitInProgress: boolean;
  isLogged: boolean;
}
