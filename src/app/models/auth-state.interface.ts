import { CurrentUserInterface } from "./current-user.interface";
import { ResponseErrorInterface } from "./response-error.interface";

export interface AuthStateInterface {
  isSubmitInProgress: boolean;
  duplicatedEmails: (string | null)[];
  currentUser: CurrentUserInterface | null;
  isLogged: boolean | null;
  errors: ResponseErrorInterface | null;
}