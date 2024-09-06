import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-driver',
  templateUrl: './login-driver.component.html',
  styleUrl: './login-driver.component.css'
})
export class LoginDriverComponent {
  loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    remember: false
  });
  hide = true;

  constructor(private fb: FormBuilder, private router: Router) {}

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form data', this.loginForm.value);
      // Implement your login logic here
    }
  }

  redirectToApp(){
    this.router.navigateByUrl('/sidebar/notifications');
  }
  redirectToRegister() {
    this.router.navigateByUrl('/register/driver');
  }

  redirectToRecoverPassword(){
    this.router.navigateByUrl('/recover-password');
  }

  redirectToSelectType(){
    this.router.navigateByUrl('/login');
  }

}
