import { ApplicationConfig, isDevMode } from '@angular/core';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';

// import { AuthInterceptor } from './interceptors/auth.interceptor';
import { BaseUrlInterceptor } from './interceptors/base-url.interceptor';
import { registrationReducer } from './redux/reducers/auth.reducer';
import { RegistrationEffects } from './redux/effects/registration.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideEffects(RegistrationEffects),
    provideHttpClient(
      withInterceptorsFromDi(),
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true,
    },
    provideState({ name: 'auth', reducer: registrationReducer }),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true, // If set to true, the connection is established within the Angular zone
    }),
    
  ],
    
};
