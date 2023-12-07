import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '', redirectTo: '/signin', pathMatch: 'full'
  },
  {
    path: 'signin',
    loadComponent: () => import('./components/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'signout',
    loadComponent: () => import('./components/registration/registration.component').then((m) => m.RegistrationComponent),
  },
  // {
  //   path: '',
  //   loadComponent: () => import('./components/default/default.component').then((m) => m.DefaultComponent),
  //   // canActivate: [authGuard],
  // },
  {
    path: 'profile',
    loadComponent: () => import('./components/profile/profile.component').then((m) => m.ProfileComponent),
    // canActivate: [authGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
    // canActivate: [authGuard],
  },
];
