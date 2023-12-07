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
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const apiKey = 'AIzaSyCtBskMmNIZUa-A4eU0huSZlIphaumSdCw';

    const authRequest = request.clone({
      params: request.params.set('key', apiKey),
    });

    return next.handle(authRequest);
  }
}
