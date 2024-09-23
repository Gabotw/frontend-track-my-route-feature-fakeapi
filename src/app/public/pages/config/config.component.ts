import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";

/**
 * @title Card with multiple sections
 */
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

  saveChanges(campo: string) {
    console.log("Guardando cambios para el campo: ", campo);
  }
}
