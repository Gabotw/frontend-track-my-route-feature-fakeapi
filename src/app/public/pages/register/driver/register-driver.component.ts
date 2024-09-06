import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-driver',
  templateUrl: './register-driver.component.html',
  styleUrl: './register-driver.component.css'
})
export class RegisterDriverComponent {
  RegisterForm: FormGroup = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    username: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    remember: false
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  onSubmit() {
    if (this.RegisterForm.valid) {
      console.log('Form data', this.RegisterForm.value);
      // Implement your login logic here
    }
  }

  redirectToLogin() {
    this.router.navigateByUrl('/login/driver');
  }

}
