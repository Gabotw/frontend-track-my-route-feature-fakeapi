import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { NgIf } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatInput } from "@angular/material/input";
import { HttpClient } from '@angular/common/http'; // Importar HttpClient
import { Observable } from 'rxjs';
import {MatSnackBar} from "@angular/material/snack-bar"; // Importar Observable para manejar la respuesta

@Component({
  selector: 'app-config',
  templateUrl: 'config.component.html',
  styleUrls: ['config.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatFormField, NgIf, FormsModule, MatInput, MatLabel],
})
export class ConfigComponent {
  first_name: string = "Nombre";
  email: string = "Email";
  last_name: string = "Apellido";
  isEditable: boolean = false;

  // URL base para el backend
  private serverBasePath: string = 'https://abbc-2800-200-e670-1e5-cc94-371c-a026-8108.ngrok-free.app/api/v1';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {} // Inyectar HttpClient

  saveChanges() {
    const profileData = {
      firstName: this.first_name,
      lastName: this.last_name,
      email: this.email,
      userType: "",              // Enviar como vacío
      password: "",              // Enviar como vacío
      transportCompany: ""       // Enviar como vacío
    };

    // Obtener el token de localStorage o del servicio de autenticación
    const token = localStorage.getItem('token'); // Asegúrate de que el token se guarde aquí al hacer login
    const headers = {
      'Authorization': `Bearer ${token}`, // Agrega el encabezado de autorización
      'Content-Type': 'application/json'
    };

    this.http.post(`${this.serverBasePath}/profiles`, profileData).subscribe(
        response => {
          console.log("Perfil guardado exitosamente", response);
          this.isEditable = false; // Cambiar a no editable después de guardar
          this.snackBar.open('Cambios guardados exitosamente', 'Cerrar', {
            duration: 3000, // Duración en milisegundos
          });
        },
        error => {
          console.error("Error al guardar el perfil", error);
          this.snackBar.open('Error al guardar los cambios', 'Cerrar', {
            duration: 3000,
          });
        }
    );
  }
}
