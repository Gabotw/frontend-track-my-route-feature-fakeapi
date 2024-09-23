import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importa el servicio HttpClient
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { NgIf } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatInput } from "@angular/material/input";

@Component({
  selector: 'app-config',
  templateUrl: 'config.component.html',
  styleUrl: 'config.component.css',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatFormField, NgIf, FormsModule, MatInput, MatLabel],
})
export class ConfigComponent {

  first_name: string = "Nombre";
  last_name: string = "Apellido";
  email: string = "Email";

  isEditable: boolean = false;

  // Inyecta HttpClient en el constructor
  constructor(private http: HttpClient) {}

  // Método para guardar cambios en el perfil
  saveChanges() {
    const updatedProfile = {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email
    };

    // URL del backend donde se guardarán los cambios (cambia por tu URL real)
    const url = 'https://mi-backend.com/api/profile';

    // Realiza la solicitud POST al backend con los datos actualizados
    this.http.post(url, updatedProfile)
      .subscribe(response => {
        console.log('Perfil actualizado con éxito', response);
        this.isEditable = false;  // Desactiva el modo edición
      }, error => {
        console.error('Error al actualizar el perfil', error);
      });
  }
}
