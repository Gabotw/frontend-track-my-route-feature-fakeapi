import {Component, OnInit} from '@angular/core';
import {BaseFormComponent} from "../../../shared/components/base-form.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {SignUpRequest} from "../../model/sign-up.request";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent extends BaseFormComponent implements OnInit{
  form!: FormGroup;
  submitted = false;
  private route: ActivatedRoute;

  constructor(private builder: FormBuilder, private authenticationService: AuthenticationService, route: ActivatedRoute) {
    super();
    this.route = route;
  }
  ngOnInit(): void {
    this.form = this.builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.invalid) return;
    let username = this.form.value.username;
    let password = this.form.value.password;
    let role = this.form.value.role;
    const signUpRequest = new SignUpRequest(username, password, [role]);

    // Obtén la ruta actual
    const currentRoute = this.route.snapshot.url.join('/'); // Esto obtiene la ruta actual
    let redirectTo = '';

    // Define la ruta de redirección según la ruta actual
    if (currentRoute.includes('driver')) {
      redirectTo = '/login/driver';
    } else if (currentRoute.includes('passenger')) {
      redirectTo = '/login/passenger';
    }

    this.authenticationService.signUp(signUpRequest, redirectTo);
    this.submitted = true;
  }

}

