import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SignUpRequest} from "../../../../iam/model/sign-up.request";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {NgIf} from "@angular/common";
import {BaseFormComponent} from "../../../../shared/components/base-form.component";
import {AuthenticationService} from "../../../../iam/services/authentication.service";

@Component({
  selector: 'app-driver',
  standalone:true,
  imports: [MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, NgIf],
  templateUrl: './register-driver.component.html',
  styleUrl: './register-driver.component.css'
})

export class RegisterDriverComponent extends BaseFormComponent implements OnInit {
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
    const signUpRequest = new SignUpRequest(username, password, ['ROLE_ADMIN']);
    this.authenticationService.signUp(signUpRequest, '/login/driver');
    this.submitted = true;
  }

  redirectToLoginDriver() {
    this.router.navigateByUrl('/login/driver');
  }

}