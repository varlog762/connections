import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  state ? null : null;
  route ? null : null;

  if (localStorage.getItem('isLoggedIn')) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
