import { Injectable } from '@angular/core';
import {environment} from "../../../environments/enviroment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";
import {SignUpRequest} from "../model/sign-up.request";
import {SignUpResponse} from "../model/sign-up.response";
import {SignInRequest} from "../model/sign-in.request";
import {SignInResponse} from "../model/sign-in.response";

/**
 * Service for Authentication
 * @summary
 * This service is responsible for handling sign-up, sign-in, and sign-out operations.
 * It also provides observables to check if the user is signed in, the current user id, and the current username.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  basePath: string = `${environment.serverBasePath}`;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })};

  private signedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private signedInUserId: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private signedInUsername: BehaviorSubject<string> = new BehaviorSubject<string>('');
    private loginError: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null); // Para manejar errores

  constructor(private router: Router, private http: HttpClient) { }


  get isSignedIn() {
    return this.signedIn.asObservable();
  }

  get currentUserId() {
    return this.signedInUserId.asObservable();
  }

  get currentUsername() {
    return this.signedInUsername.asObservable();
  }

  get currentLoginError() {
        return this.loginError.asObservable(); // Exponer el error de login
  }
  /**
   * Sign up a new user
   * @param signUpRequest - The sign-up request containing the username and password
   * @returns - The sign-up response containing the user id and username
   */
  signUp(signUpRequest: SignUpRequest , redirectTo: string) {
    return this.http.post<SignUpResponse>(`${this.basePath}/authentication/sign-up`, signUpRequest, this.httpOptions)
        .subscribe( {
          next: (response) => {
              console.log(`Signed up as ${response.username} with id ${response.id}`);
              this.router.navigate([redirectTo]).then(); // Redirige a la ruta especificada
          },
          error: (error) => {
            console.error(`Error while signing up: ${error}`);
            this.router.navigate(['/sign-up']).then();
          }
        });
  }

  /**
   * Sign in an existing user
   * @param signInRequest - The sign-in request containing the username and password
   * @returns - The sign-in response containing the user id, username, and token
   */
  signIn(signInRequest: SignInRequest) {
    console.log(signInRequest);
    return this.http.post<SignInResponse>(`${this.basePath}/authentication/sign-in`, signInRequest, this.httpOptions)
        .subscribe({
          next: (response) => {
            this.signedIn.next(true);
            this.signedInUserId.next(response.id);
            this.signedInUsername.next(response.username);
            localStorage.setItem('token', response.token);
            localStorage.setItem('profileId', response.id.toString());
            localStorage.setItem('username', response.username); // Aquí guardamos el username

            // Llamar al endpoint para obtener el rol del usuario
            this.http.get<{ id: number, username: string, roles: string[] }>(`${this.basePath}/users/${response.id}`,
                { headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` }) })
                .subscribe(userResponse => {
                  // Guardar el rol en localStorage o en una variable
                  const role = userResponse.roles[0]; // Supongamos que el primer rol es el que queremos
                  localStorage.setItem('userRole', role);

                    // Verificar si el usuario está en la ruta /login/driver y tiene el rol ROLE_USER
                    if (role === 'ROLE_USER' && this.router.url === '/login/driver') {
                        this.loginError.next("NO PUEDES INICIAR SESION CON ESE TIPO DE USUARIO"); // Emitir el error
                        this.signedIn.next(false); // Cambiar el estado a no firmado
                        return; // No continuar con el flujo
                    }else if (role === 'ROLE_ADMIN' && this.router.url === '/login/passenger') {
                        this.loginError.next("NO PUEDES INICIAR SESION CON ESE TIPO DE USUARIO"); // Emitir el error
                        this.signedIn.next(false); // Cambiar el estado a no firmado
                        return; // No continuar con el flujo
                    }


                  // Redirigir según el rol
                  if (role === 'ROLE_ADMIN') {
                    this.router.navigate(['/driver/select-route']).then();
                  } else if (role === 'ROLE_USER') {
                    this.router.navigate(['/sidebar/notifications']).then(); // Cambia a la ruta correspondiente para ROL_USER
                  }
                });

          },
          error: (error) => {
            console.error(`Error while signing in: ${error}`);
            this.signedIn.next(false);
            this.signedInUserId.next(0);
            this.signedInUsername.next('');
            localStorage.removeItem('token');
          }
        });
  }

  /**
   * Sign out the current user
   */
  signOut() {
    this.signedIn.next(false);
    this.signedInUserId.next(0);
    this.signedInUsername.next('');
    localStorage.removeItem('token');
    localStorage.removeItem('profileId')
    localStorage.removeItem('userRole'); // Limpiar el rol
      localStorage.removeItem('username');
    this.router.navigate(['/sign-in']).then();
  }

}

