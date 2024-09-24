import { Component } from '@angular/core';
import { MatFormField } from "@angular/material/form-field";
import { MatInput, MatLabel } from "@angular/material/input";
import {MatAnchor, MatButton, MatFabButton} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    MatButton,
    FormsModule,
    MatIcon,
    MatAnchor,
    MatFabButton
  ],
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {
  subject: string = ''; // Variable para almacenar el asunto
  content: string = ''; // Variable para almacenar el contenido

  getMailToLink(): string {
    const email = 'mariobenjamin003@gmail.com'; // Cambia a tu correo
    const subject = encodeURIComponent(this.subject); // Asegúrate de codificar el asunto
    const body = encodeURIComponent(this.content); // Asegúrate de codificar el contenido
    return `mailto:${email}?subject=${subject}&body=${body}`;
  }
}
