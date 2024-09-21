// src/app/login/login_passenger.component.ts
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import {NgIf} from "@angular/common";
import {BaseFormComponent} from "../../../../shared/components/base-form.component";
import {AuthenticationService} from "../../../../iam/services/authentication.service";
import {SignUpRequest} from "../../../../iam/model/sign-up.request";

@Component({
  selector: 'app-register',
  standalone:true,
  imports: [MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, NgIf],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends BaseFormComponent implements OnInit {
  RegisterForm!: FormGroup;
  submitted = false;

  hide = true;
  
  constructor(private builder: FormBuilder, private router: Router,
              private authenticationService: AuthenticationService) {
    super();
  }

  ngOnInit(): void{
    this.RegisterForm = this.builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.RegisterForm.invalid) return;
    let username = this.RegisterForm.value.username;
    let password = this.RegisterForm.value.password;
    const signUpRequest = new SignUpRequest(username, password);
    this.authenticationService.signUp(signUpRequest);
    this.submitted = true;
  }

  redirectToLogin() {
    this.router.navigateByUrl('/login/passenger');
  }
}
