import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EMPTY, Observable, catchError, map, of, tap, throwError } from 'rxjs';

import { RegistrationRequestIntrface } from '../models/registration-request.interface';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  registration(data: RegistrationRequestIntrface): Observable<object> {
    return this.http.post('/registration', data).pipe(
      tap(() => {
        this.router.navigate(['/signin']);
      }),
      catchError((error: HttpErrorResponse) => {
        console.log('Error during registration:', error);

        return of(EMPTY);
      })      
    );
  }
}
