import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { NewNameInterface } from '../models/new-name.interface';

@Injectable({
  providedIn: 'root',
})
export class UpdateProfileService {
  constructor(private http: HttpClient) {}

  updateName(newName: NewNameInterface): Observable<void> {
    return this.http.put<void>('/profile', newName);
  }
}
