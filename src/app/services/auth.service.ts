import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EMPTY, Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';

import { RegistrationRequestIntrface } from '../models/registration-request.interface';
import { ToastService } from './toast.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router, private toastService: ToastService) { }

  registration(data: RegistrationRequestIntrface): Observable<object> {
    return this.http.post('/registration', data).pipe(
      // catchError((error: HttpErrorResponse) => {
      //   console.log('Error during registration:', error);

      //   return of(EMPTY);
      // })      
    );
  }
}
