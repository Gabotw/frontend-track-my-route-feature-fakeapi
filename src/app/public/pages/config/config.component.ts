import {Component, OnInit} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { NgIf } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatInput } from "@angular/material/input";
import { HttpClient } from '@angular/common/http'; // Importar HttpClient
import { Observable } from 'rxjs';
import {MatSnackBar} from "@angular/material/snack-bar"; // Importar Observable para manejar la respuesta
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-config',
  templateUrl: 'config.component.html',
  styleUrls: ['config.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatFormField, NgIf, FormsModule, MatInput, MatLabel],
})
export class ConfigComponent implements OnInit{
  first_name: string = "Nombre";
  email: string = "Email";
  last_name: string = "Apellido";
  isEditable: boolean = false;

  // URL base para el backend
  private serverBasePath: string = 'http://localhost:8080/api/v1';
  private userId: number; // Cambiar profileId a userId

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
    this.userId = 0; // Inicializa userId en 0
  }

  ngOnInit(): void {
    this.loadUserId(); // Cargar el ID del usuario al iniciar
  }

  // Método para cargar el ID del usuario desde el almacenamiento local
  loadUserId() {
    const profileIdFromStorage = localStorage.getItem('profileId');
    this.userId = profileIdFromStorage ? +profileIdFromStorage : 0;


    //console.log("ID recuperado del almacenamiento:", this.userId);
    //console.log("URL:", `${this.serverBasePath}/profiles/${(this.userId)}`);

    if (this.userId !== 0) {
      this.loadUserProfile(); // Si hay un userId, cargar el perfil
    } else {
      this.snackBar.open('No se encontró el ID del usuario', 'Cerrar', {
        duration: 3000,
      });
    }
  }

  // Método para cargar el perfil del usuario
  loadUserProfile() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Obtener el perfil del usuario usando el userId
    this.http.get<any>(`${this.serverBasePath}/profiles/${this.userId}`, { headers }).subscribe(
        response => {
          // Asignar los datos obtenidos a las propiedades
          //console.log("Datos del perfil recibidos:", response);
          const names = response.fullName.split(' ');
          this.first_name = names[0]; // Primer nombre
          this.last_name = names.slice(1).join(' '); // El resto como apellido
          this.email = response.email;
        },
        error => {
          console.error("Error al cargar el perfil", error);
          this.snackBar.open('Error al cargar el perfil', 'Cerrar', {
            duration: 3000,
          });
        }
    );
  }

  saveChanges() {
    const profileData = {
      firstName: this.first_name,
      lastName: this.last_name,
      email: this.email,
      userType: "", // Enviar como vacío
      password: "", // Enviar como vacío
      transportCompany: "" // Enviar como vacío
    };
    if (!this.first_name || !this.last_name || !this.email) {
      this.snackBar.open('Datos no guardados correctamente, debe rellenar los campos.', 'Cerrar', {
        duration: 3000,
      });
      return; // Detiene la ejecución si hay campos vacíos
    }

    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    // Usar PUT para actualizar el perfil utilizando userId
    this.http.put<any>(`${this.serverBasePath}/profiles/${this.userId}`, profileData, { headers }).subscribe(
        response => {
          //console.log("Perfil actualizado exitosamente", response);
          this.isEditable = false; // Cambiar a no editable después de guardar
          this.snackBar.open('Cambios guardados exitosamente', 'Cerrar', {
            duration: 3000,
          });
          this.loadUserProfile(); // Cargar el perfil después de actualizarlo
        },
        error => {
          console.error("Error al guardar el perfil", error);
          this.snackBar.open('Error al guardar los cambios', 'Cerrar', {
            duration: 3000,
          });
        }
    );
  }

  // Método para activar la edición del perfil
  toggleEdit() {
    this.isEditable = !this.isEditable; // Alterna el modo editable
  }
}