import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { CheckFieldService } from '../../services/check-field.service';
import { selectIsSubmitInProgress } from '../../redux/selectors/auth.selectors';
import {
  loginAction,
  submitBtnDisableAction,
} from '../../redux/actions/auth.actions';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  public isSubmitInProgress$!: Observable<boolean>;

  public isFieldInvalid = this.checkFieldSrv.isFieldInvalid;

  public isFieldHasError = this.checkFieldSrv.isFieldHasError;

  constructor(
    private fb: FormBuilder,
    private checkFieldSrv: CheckFieldService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.initializeForm();

    this.isSubmitInProgress$ = this.store.select(selectIsSubmitInProgress);

    // this.subscribeErrors();
  }

  initializeForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    if (!this.loginForm.invalid) {
      this.store.dispatch(loginAction(this.loginForm.value));
      this.store.dispatch(submitBtnDisableAction());
      // this.registrationForm.reset();
    }
  }
}
