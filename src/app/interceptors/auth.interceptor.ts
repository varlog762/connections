import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const currentUserString = localStorage.getItem('currentUser');

    if (currentUserString) {
      const currentUser = JSON.parse(currentUserString);

      request = request.clone({
        setHeaders: {
          'rs-ui': currentUser['rs-ui'] || '',
          'rs-email': currentUser['rs-email'] || '',
          Authorization: currentUser['Authorization'] || '',
        },
      });
    }

    return next.handle(request);
  }
}
