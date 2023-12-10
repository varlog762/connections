import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadUserProfileAction } from '../../redux/actions/profile.actions';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(
    private store: Store,
    private router: Router
  ) {}

  goToUserProfile() {
    this.store.dispatch(loadUserProfileAction());
    this.router.navigate(['/profile']);
  }
}
