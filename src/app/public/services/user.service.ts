import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import { User } from "../model/user.entity";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/users';
  }

  /**
   * Eliminar usuario por su nombre de usuario.
   * @param username El nombre de usuario del usuario a eliminar.
   * @returns Observable<void>
   */
  deleteUser(username: string): Observable<void> {
    return this.http.delete<void>(`${this.resourceEndpoint}/${username}`);
  }
}
