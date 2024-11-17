import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-promo-dialog',
  templateUrl: './add-promo-dialog.component.html',
  styleUrl: './add-promo-dialog.component.css'
})
export class AddPromoDialogComponent {
  form: FormGroup;

  constructor(
      private dialogRef: MatDialogRef<AddPromoDialogComponent>,
      private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required],
      validUntil: ['', Validators.required]
    });
  }

  onCancel() {
    this.dialogRef.close(null);
  }

  onSave() {
    if (this.form.valid) {
      const formattedData = {
        ...this.form.value,
        validUntil: this.formatDate(this.form.value.validUntil)
      };
      this.dialogRef.close(formattedData);
    }
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
