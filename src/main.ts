import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { BaseUrlInterceptor } from './app/interceptors/base-url.interceptor';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
