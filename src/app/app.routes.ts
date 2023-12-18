import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/main/main.component').then(m => m.MainComponent),
    canActivate: [authGuard],
  },
  {
    path: 'signin',
    loadComponent: () =>
      import('./components/login/login.component').then(m => m.LoginComponent),
    canActivate: [authGuard],
  },
  {
    path: 'signout',
    loadComponent: () =>
      import('./components/registration/registration.component').then(
        m => m.RegistrationComponent
      ),
    canActivate: [authGuard],
  },

  {
    path: 'profile',
    loadComponent: () =>
      import('./components/profile/profile.component').then(
        m => m.ProfileComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'conversation/:conversationID',
    loadComponent: () =>
      import('./components/conversation/conversation.component').then(
        m => m.ConversationComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
    pathMatch: 'full',
  },
];
