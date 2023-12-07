import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'signin',
    loadChildren: () => import('./components/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'signout',
    loadChildren: () => import('./components/registration/registration.component').then((m) => m.RegistrationComponent),
  },
  {
    path: 'profile',
    loadChildren: () => import('./components/profile/profile.component').then((m) => m.ProfileComponent),
    canActivate: [authGuard],
  },
  {
    path: '',
    loadChildren: () => import('./components/default/default.component').then((m) => m.DefaultComponent),
    canActivate: [authGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
    canActivate: [authGuard],
  },
];
