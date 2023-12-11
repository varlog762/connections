import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfileResponceInterface } from '../models/profile-response-interface';

@Injectable({
  providedIn: 'root',
})
export class LoadUserProfileService {
  constructor(private http: HttpClient) {}

  loadProfile(): Observable<ProfileResponceInterface> {
    return this.http.get<ProfileResponceInterface>('/profile');
  }
}
