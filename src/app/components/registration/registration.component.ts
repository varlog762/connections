import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { passwordValidator } from '../../validators/password.validator';
import { usernameValidator } from '../../validators/userName.validator';
import { RegistrationRequestBodyIntrface } from '../../models/registration-request-body.interface';

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

  constructor(private fb: FormBuilder) {}

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

  }
}
