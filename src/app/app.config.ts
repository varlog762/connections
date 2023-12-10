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

// import { AuthInterceptor } from './interceptors/auth.interceptor';
import { BaseUrlInterceptor } from './interceptors/base-url.interceptor';
import { registrationReducer } from './redux/reducers/auth.reducer';
import { RegistrationEffects } from './redux/effects/registration.effects';
import { RegistrationSuccessEffects } from './redux/effects/registration-success.effects';
import { LoginEffects } from './redux/effects/login.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideEffects(
      RegistrationEffects,
      RegistrationSuccessEffects,
      LoginEffects
    ),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true,
    },
    provideState({ name: 'auth', reducer: registrationReducer }),
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
