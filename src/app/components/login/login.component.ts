import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Observable, Subscription, filter } from 'rxjs';
import { Store } from '@ngrx/store';

import { CheckFieldService } from '../../services/check-field.service';
import {
  selectError,
  selectIsSubmitInProgress,
} from '../../redux/selectors/auth.selectors';
import {
  loginAction,
  submitBtnDisableAction,
} from '../../redux/actions/auth.actions';
import { BackendErrorsEnum } from '../../enums/backend-errors.enum';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm!: FormGroup;

  public isSubmitInProgress$!: Observable<boolean>;

  public isFieldInvalid = this.checkFieldSrv.isFieldInvalid;

  public isFieldHasError = this.checkFieldSrv.isFieldHasError;

  public errorSubscription$!: Subscription;

  public loginFormSubscription$!: Subscription;

  constructor(
    private fb: FormBuilder,
    private checkFieldSrv: CheckFieldService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.initializeForm();

    this.isSubmitInProgress$ = this.store.select(selectIsSubmitInProgress);

    this.subscribeErrors();
  }

  initializeForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

    this.loginFormSubscription$ = this.loginForm.valueChanges.subscribe(() => {
      if (this.loginForm.hasError('notFound')) {
        this.loginForm.setErrors(null);
      }
    });
  }

  subscribeErrors(): void {
    this.errorSubscription$ = this.store
      .select(selectError)
      .pipe(
        filter(error => error.errorType === BackendErrorsEnum.LOGIN_NOT_FOUND)
      )
      .subscribe(() => {
        this.loginForm.setErrors({ notFound: true });
      });
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    if (!this.loginForm.invalid) {
      this.store.dispatch(loginAction(this.loginForm.value));
      this.store.dispatch(submitBtnDisableAction());
    }
  }

  ngOnDestroy(): void {
    this.errorSubscription$.unsubscribe();
    this.loginFormSubscription$.unsubscribe();
  }
}
