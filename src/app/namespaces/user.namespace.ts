import { CurrentUserInterface } from '../models/current-user.interface';

export namespace UserNamespace {
  export const currentUser: CurrentUserInterface =
    JSON.parse(localStorage.getItem('currentUser') as string) || 'username';

  export function getCurrentCompanionName(id: string): string | null {
    return localStorage.getItem(id) || null;
  }
}
