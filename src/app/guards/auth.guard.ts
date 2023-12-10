import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  state ? null : null;
  route ? null : null;

  if (localStorage.getItem('isLogged')) {
    return true;
  }

  router.navigate(['/signin']);
  return false;
};
