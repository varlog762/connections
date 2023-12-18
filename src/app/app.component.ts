import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { Store } from '@ngrx/store';

import { isLoggedAction } from './redux/actions/auth.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, HeaderComponent],
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getUserFromLacalStorage();
  }

  getUserFromLacalStorage(): void {
    if (localStorage.getItem('currentUser')) {
      this.store.dispatch(isLoggedAction());
    }
  }
}
