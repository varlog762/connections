import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { UserProfileInterface } from '../../models/user-profile.interface';
import {
  selectIsNameSet,
  selectIsProfileSubmitingInProgress,
  selectUserProfile,
  selectUserProfileErrors,
} from '../../redux/selectors/user-profile.selectors';
import { ResponseErrorInterface } from '../../models/response-error.interface';
import { nameValidator } from '../../validators/name.validator';
import { CheckFieldService } from '../../services/check-field.service';
import {
  cancelBtnDisableAction,
  nameSetTrueAction,
  updateUsernameAction,
} from '../../redux/actions/user-profile.actions';
import {
  doLogoutAction,
  logoutBtnDisableAction,
} from '../../redux/actions/auth.actions';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  public profile$!: Observable<UserProfileInterface | null>;

  public error$!: Observable<ResponseErrorInterface | null>;

  public isSubmitInProgress$!: Observable<boolean>;

  private profileSubscription$!: Subscription;

  public isNameEditable = false;

  public nameForm!: FormGroup;

  public currentName!: string | undefined;

  public isFieldInvalid = this.checkFieldSrv.isFieldInvalid;

  public isFieldHasError = this.checkFieldSrv.isFieldHasError;

  private isNameSetSubscription$!: Subscription;

  constructor(
    private store: Store,
    private router: Router,
    private fb: FormBuilder,
    private checkFieldSrv: CheckFieldService
  ) {}

  ngOnInit(): void {
    this.profile$ = this.store.select(selectUserProfile);

    this.error$ = this.store.select(selectUserProfileErrors);

    this.isSubmitInProgress$ = this.store.select(
      selectIsProfileSubmitingInProgress
    );

    this.initializeForm();

    this.subscribeProfileState();
  }

  initializeForm(): void {
    this.nameForm = this.fb.group({
      name: [
        '',
        [Validators.required, Validators.maxLength(40), nameValidator()],
      ],
    });
  }

  subscribeProfileState() {
    this.profileSubscription$ = this.profile$.subscribe(profile => {
      if (!profile) {
        this.router.navigate(['/']);
      }

      this.isNameSetSubscription$ = this.store
        .select(selectIsNameSet)
        .subscribe((isNameSet: boolean) => {
          if (!isNameSet) {
            this.nameForm.get('name')?.setValue(profile?.name);
            this.store.dispatch(nameSetTrueAction());
          }
        });
    });
  }

  editName(): void {
    this.isNameEditable = true;
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    if (!this.nameForm.invalid) {
      this.store.dispatch(
        updateUsernameAction({ payload: this.nameForm.get('name')?.value })
      );
      this.store.dispatch(cancelBtnDisableAction());
      this.isNameEditable = false;
    }
  }

  cancelEditing(): void {
    this.isNameEditable = false;

    this.profileSubscription$.unsubscribe();
    this.subscribeProfileState();
  }

  logout() {
    this.store.dispatch(doLogoutAction());
    this.store.dispatch(logoutBtnDisableAction());
  }

  ngOnDestroy(): void {
    this.profileSubscription$.unsubscribe();
    this.isNameSetSubscription$.unsubscribe();
  }
}
