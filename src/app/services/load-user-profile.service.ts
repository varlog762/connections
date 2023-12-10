import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadUserProfileService {
  constructor(private http: HttpClient) {}

  loadProfile(): Observable<object> {
    return this.http.get('/profile');
  }
}
