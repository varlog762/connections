import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { BackendErrorsEnum } from '../../enums/backend-errors.enum';
import { passwordValidator } from '../../validators/password.validator';
import { nameValidator } from '../../validators/name.validator';
import {
  registrationAction,
  submitBtnDisableAction,
} from '../../redux/actions/auth.actions';
import {
  selectError,
  selectIsSubmitInProgress,
} from '../../redux/selectors/auth.selectors';
import { emailDuplicationValidator } from '../../validators/duplicated-email.validator';
import { CheckFieldService } from '../../services/check-field.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent implements OnInit, OnDestroy {
  public registrationForm!: FormGroup;

  public isSubmitInProgress$!: Observable<boolean>;

  public isFieldInvalid = this.checkFieldSrv.isFieldInvalid;

  public isFieldHasError = this.checkFieldSrv.isFieldHasError;

  public errorSubscription$!: Subscription;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private checkFieldSrv: CheckFieldService
  ) {}

  ngOnInit(): void {
    this.initializeForm();

    this.isSubmitInProgress$ = this.store.select(selectIsSubmitInProgress);

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
      name: [
        '',
        [Validators.required, Validators.maxLength(40), nameValidator()],
      ],
      password: ['', [Validators.required, passwordValidator()]],
    });
  }

  subscribeErrors(): void {
    this.errorSubscription$ = this.store.select(selectError).subscribe(data => {
      const { errorType, duplicatedEmails } = data;

      const isEmailDuplicated =
        errorType === BackendErrorsEnum.DUPLICATED_EMAILS &&
        duplicatedEmails.includes(this.registrationForm.get('email')?.value);

      if (isEmailDuplicated) {
        this.registrationForm
          .get('email')
          ?.setErrors({ emailDuplicated: true });
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
    }
  }

  ngOnDestroy(): void {
    this.errorSubscription$.unsubscribe();
  }
}
