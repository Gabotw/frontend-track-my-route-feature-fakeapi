import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrl: './recover-password.component.css'
})
export class RecoverPasswordComponent {
  RegisterForm: FormGroup = this.fb.group({
    email: [''],
  });
  hide = true;

  constructor(private fb: FormBuilder, private router: Router) {}

  onSubmit() {
    if (this.RegisterForm.valid) {
      console.log('Form data', this.RegisterForm.value);
    }
  }

  redirectToLogin() {
    this.router.navigateByUrl('/login');
  }
}
