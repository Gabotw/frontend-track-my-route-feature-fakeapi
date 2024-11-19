import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-trip-dialog',
  templateUrl: './add-trip-dialog.component.html',
  styleUrl: './add-trip-dialog.component.css'
})
export class AddTripDialogComponent {
  form: FormGroup;

  constructor(
      private dialogRef: MatDialogRef<AddTripDialogComponent>,
      private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      time: ['', Validators.required],
      fare: ['', Validators.required]
    });
  }

  allowDecimal(event: KeyboardEvent): void {
    const charCode = event.charCode || event.keyCode;
    const char = String.fromCharCode(charCode);

    // Permitir solo números y un punto decimal
    if (!/^[0-9.]$/.test(char)) {
      event.preventDefault();
    }

    // No permitir más de un punto decimal
    const input = (event.target as HTMLInputElement).value;
    if (char === '.' && input.includes('.')) {
      event.preventDefault();
    }
  }

  /**
   * Formatear el valor de la tarifa para incluir el símbolo "$" al guardar
   */
  formatFare(): void {
    const fareControl = this.form.get('fare');
    if (fareControl?.value && !fareControl.value.startsWith('S/')) {
      fareControl.setValue(`S/${fareControl.value}`);
    }
  }
  onCancel() {
    this.dialogRef.close(null);
  }

  onSave() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }
}
