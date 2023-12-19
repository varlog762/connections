import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { loadUserProfileAction } from '../../redux/actions/user-profile.actions';
import {
  doLogoutAction,
  logoutBtnDisableAction,
} from '../../redux/actions/auth.actions';
import { selectIsLogged } from '../../redux/selectors/auth.selectors';
import { UserNamespace } from '../../namespaces/user.namespace';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public isLogged$!: Observable<boolean | null>;

  public currentUser = UserNamespace.currentUser['rs-email'];

  constructor(
    private store: Store,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLogged$ = this.store.select(selectIsLogged);
  }

  goToUserProfile() {
    this.store.dispatch(loadUserProfileAction());
  }

  logout() {
    this.store.dispatch(doLogoutAction());
    this.store.dispatch(logoutBtnDisableAction());
  }

  ngOnDestroy(): void {
    this.router.navigate(['/']);
  }
}
