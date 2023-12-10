import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const currentUser = localStorage.getItem('currentUser');

  route ? null : null;

  if (!currentUser) {
    if (state.url === '/signin' || state.url === '/signout') {
      return true;
    } else {
      return router.navigate(['/signin']);
    }
  } else {
    if (state.url === '/signin' || state.url === '/signout') {
      return router.navigate(['/']);
    } else {
      return true;
    }
  }
};
