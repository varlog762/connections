import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RegistrationRequestIntrface } from '../models/registration-request.interface';
import { LoginRequestInterface } from '../models/login-request.interface';
import { LoginResponseInterface } from '../models/login-response.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  registration(data: RegistrationRequestIntrface): Observable<object> {
    return this.http.post('/registration', data);
  }

  login(data: LoginRequestInterface): Observable<LoginResponseInterface> {
    return this.http.post<LoginResponseInterface>('/login', data);
  }

  logout(): Observable<void> {
    return this.http.delete<void>('/logout');
  }
}
