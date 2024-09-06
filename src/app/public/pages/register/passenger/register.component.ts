// src/app/login/login_passenger.component.ts
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone:true,
  imports: [MatCardModule,
    MatInputModule,

    MatButtonModule,
    MatIconModule, FormsModule, ReactiveFormsModule, MatFormFieldModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  showFiller = false;
  RegisterForm: FormGroup = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    username: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    remember: false
  });
  hide = true;
  
  constructor(private fb: FormBuilder, private router: Router) {}

  onSubmit() {
    if (this.RegisterForm.valid) {
      console.log('Form data', this.RegisterForm.value);
      // Implement your login logic here
    }
  }

  redirectToLogin() {
    this.router.navigateByUrl('/login/passenger');
  }
}
