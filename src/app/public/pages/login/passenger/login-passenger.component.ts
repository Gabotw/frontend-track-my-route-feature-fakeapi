
// src/app/login/login_passenger.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone:true,
  imports: [MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule ],
  templateUrl: './login-passenger.component.html',
  styleUrls: ['./login-passenger.component.scss']
})
export class LoginPassengerComponent {
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
    this.router.navigateByUrl('/register/passenger');
  }

  redirectToRecoverPassword(){
    this.router.navigateByUrl('/recover-password');
  }

  redirectToSelectType(){
    this.router.navigateByUrl('/login');
  }
}
