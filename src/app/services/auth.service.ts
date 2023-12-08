import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

import { RegistrationRequestIntrface } from '../models/registration-request.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registration(data: RegistrationRequestIntrface): Observable<object> {
    return this.http.post('/registration', data).pipe(
      map((response: object) => response),
      catchError((error: HttpErrorResponse) => {
        // Обработка ошибки
        console.log('Error during registration:', error);

        // Возвращаем новый Observable с пустым объектом, чтобы не обрушивать поток
        return throwError({});
      })      
    );
  }
}
