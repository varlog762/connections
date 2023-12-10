import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { RegistrationRequestIntrface } from '../models/registration-request.interface';
import { ToastService } from './toast.service';
import { LoginRequestInterface } from '../models/login-request.interface';
import { LoginResponseInterface } from '../models/login-response.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private toastService: ToastService
  ) {}

  registration(data: RegistrationRequestIntrface): Observable<object> {
    return this.http.post('/registration', data);
  }

  login(data: LoginRequestInterface): Observable<LoginResponseInterface> {
    return this.http.post<LoginResponseInterface>('/login', data);
  }
}
