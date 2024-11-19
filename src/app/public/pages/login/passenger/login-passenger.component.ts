
// src/app/login/login_passenger.component.ts
import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {NgIf} from "@angular/common";
import {BaseFormComponent} from "../../../../shared/components/base-form.component";
import {AuthenticationService} from "../../../../iam/services/authentication.service";
import {SignInRequest} from "../../../../iam/model/sign-in.request";


@Component({
  selector: 'app-login',
  standalone:true,
  imports: [MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule, RouterLink, NgIf],
  templateUrl: './login-passenger.component.html',
  styleUrls: ['./login-passenger.component.scss']
})
export class LoginPassengerComponent extends BaseFormComponent implements OnInit {
  loginForm! : FormGroup;
  hide = true;
  submitted = false;
  errorMessage: string | null = null;

  constructor(private builder: FormBuilder, private router: Router, private authenticationService: AuthenticationService) {
    super();
  }

  ngOnInit(): void {
    this.loginForm = this.builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: false
    });

    // Suscribirse a los errores de inicio de sesión
    this.authenticationService.currentLoginError.subscribe(error => {
      this.errorMessage = error;

      // Mostrar el mensaje de error por un tiempo y luego ocultarlo
      if (error) {
        setTimeout(() => {
          this.errorMessage = null; // Oculta el mensaje después de 5 segundos
        }, 5000);
      }
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      let username = this.loginForm.value.username;
      let password = this.loginForm.value.password;
      const signInRequest = new SignInRequest(username, password);
      this.authenticationService.signIn(signInRequest);
      this.submitted = true;
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
