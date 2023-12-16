import { ApplicationConfig, isDevMode } from '@angular/core';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';

import { BaseUrlInterceptor } from './interceptors/base-url.interceptor';
import { authReducer } from './redux/reducers/auth.reducer';
import { RegistrationEffects } from './redux/effects/registration.effects';
import { RegistrationSuccessEffects } from './redux/effects/registration-success.effects';
import { LoginEffects } from './redux/effects/login.effects';
import { userProfileReducer } from './redux/reducers/userProfile.reducer';
import { UserProfileEffects } from './redux/effects/user-profile.effects';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { UpdateUsernameEffects } from './redux/effects/update-username.effects';
import { UpdateUsernameSuccessEffects } from './redux/effects/update-username-success.effects';
import { LogoutEffects } from './redux/effects/logout.effects';
import { LogoutSuccessEffects } from './redux/effects/logout-success.effects';
import { groupsReducer } from './redux/reducers/groups.reducer';
import { LoadGroupsEffects } from './redux/effects/load-groups.effects';
import { CreateNewGroupEffects } from './redux/effects/create-new-group.effects';
import { DeleteGroupEffects } from './redux/effects/delete-group.effects';
import { peopleReducer } from './redux/reducers/people.reducer';
import { LoadPeopleEffects } from './redux/effects/load-people.effects';
import { LoadCompanionsEffects } from './redux/effects/load-companions.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideEffects(
      RegistrationEffects,
      RegistrationSuccessEffects,
      LoginEffects,
      UserProfileEffects,
      UpdateUsernameEffects,
      UpdateUsernameSuccessEffects,
      LogoutEffects,
      LogoutSuccessEffects,
      LoadGroupsEffects,
      CreateNewGroupEffects,
      DeleteGroupEffects,
      LoadPeopleEffects,
      LoadCompanionsEffects
    ),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    provideStore({
      authState: authReducer,
      userProfileState: userProfileReducer,
      groupsState: groupsReducer,
      peopleState: peopleReducer,
    }),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
      connectInZone: true, // If set to true, the connection is established within the Angular zone
    }),
    provideAnimations(),
  ],
};
