import { Component } from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatInput, MatLabel} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatFabButton} from "@angular/material/button";

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    MatIcon,
    MatFabButton,
    MatButton
  ],
  templateUrl: './help.component.html',
  styleUrl: './help.component.css'
})
export class HelpComponent {

}
