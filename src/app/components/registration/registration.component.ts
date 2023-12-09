import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';

import { BackendErrors } from '../../enums/backend-errors.enum';
import { passwordValidator } from '../../validators/password.validator';
import { usernameValidator } from '../../validators/userName.validator';
import { registrationAction, submitBtnDisableAction } from '../../redux/actions/auth.actions';
import { Observable, Subscription, map } from 'rxjs';
import { errorAndDuplicatedEmailsSelector, isSubmitInProgressSelector } from '../../redux/selectors/auth.selectors';
import { emailDuplicationValidator } from '../../validators/duplicated-email.validator';
import { CheckFieldService } from '../../services/check-field.service';

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
export class RegistrationComponent implements OnInit, OnDestroy {
  public registrationForm!: FormGroup;

  public isSubmitInProgress$!: Observable<boolean>;

  public isFieldInvalid = this.checkFieldSrv.isFieldInvalid;

  public isFieldHasError = this.checkFieldSrv.isFieldHasError;

  public duplicatedEmailsErrorSubscr$!: Subscription;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private checkFieldSrv: CheckFieldService,
    ) {}

  ngOnInit(): void {
    this.initializeForm();

    this.isSubmitInProgress$ = this.store.select(isSubmitInProgressSelector);

    this.subscribeErrors();
  }

  initializeForm(): void {
    this.registrationForm = this.fb.group({
      email: [
        '', 
      {
        validators: [Validators.required, Validators.email],
        asyncValidators: [emailDuplicationValidator(this.store)],
        updateOn: 'change',
      },
    ],
      name: ['', [Validators.required, usernameValidator]],
      password: ['', [Validators.required, passwordValidator]],
    });
  }

  subscribeErrors(): void {
    this.duplicatedEmailsErrorSubscr$ = this.store.select(errorAndDuplicatedEmailsSelector).subscribe(data => {
      const { errorType, duplicatedEmails } = data;
  
      const isEmailDuplicated = (errorType === BackendErrors.DUPLICATED_EMAILS
        && duplicatedEmails.length
        && duplicatedEmails.includes(this.registrationForm.get('email')?.value));
  
      if (isEmailDuplicated) {
        this.registrationForm.get('email')?.setErrors({ emailDuplicated: true });
      } else {
        this.registrationForm.get('email')?.setErrors(null);
      }
    });
  }
  

  onSubmit(event: Event): void {
    event.preventDefault();

    if (!this.registrationForm.invalid) {
      this.store.dispatch(registrationAction(this.registrationForm.value));
      this.store.dispatch(submitBtnDisableAction());
      // this.registrationForm.reset();
    }
  }

  ngOnDestroy(): void {
    this.duplicatedEmailsErrorSubscr$.unsubscribe();
  }
}
