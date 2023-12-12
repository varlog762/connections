import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';

import { loadUserProfileAction } from '../../redux/actions/user-profile.actions';
import {
  doLogoutAction,
  logoutBtnDisableAction,
} from '../../redux/actions/auth.actions';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private store: Store) {}

  goToUserProfile() {
    this.store.dispatch(loadUserProfileAction());
  }

  logout() {
    this.store.dispatch(doLogoutAction());
    this.store.dispatch(logoutBtnDisableAction());
  }
}
