import { Component, OnInit } from '@angular/core';
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
import { registrationAction } from '../../redux/actions/auth.actions';


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule,
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent implements OnInit {
  public registrationForm!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store, private authService: AuthService) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, usernameValidator]],
      password: ['', [Validators.required, passwordValidator]],
    });
  }

  onSubmit(): void {
    console.log(1, this.registrationForm.value);
    this.store.dispatch(registrationAction(this.registrationForm.value));
    // this.registrationForm.reset;
    // this.authService.registration(this.registrationForm.value).subscribe();
  }
}
