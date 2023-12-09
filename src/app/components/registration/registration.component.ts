import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';

import { passwordValidator } from '../../validators/password.validator';
import { usernameValidator } from '../../validators/userName.validator';
import { RegistrationRequestIntrface } from '../../models/registration-request.interface';
import { AuthService } from '../../services/auth.service';
import { registrationAction, submitBtnDisableAction } from '../../redux/actions/auth.actions';
import { Observable, map } from 'rxjs';
import { isSubmitInProgressSelector } from '../../redux/selectors/auth.selectors';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent implements OnInit {
  public registrationForm!: FormGroup;

  public isSubmitInProgress$!: Observable<boolean>;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm();

    this.isSubmitInProgress$ = this.store.select(isSubmitInProgressSelector);
  }

  initializeForm(): void {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, usernameValidator]],
      password: ['', [Validators.required, passwordValidator]],
    });
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.store.dispatch(registrationAction(this.registrationForm.value));
    this.store.dispatch(submitBtnDisableAction());
    // this.registrationForm.reset;
  }
}
