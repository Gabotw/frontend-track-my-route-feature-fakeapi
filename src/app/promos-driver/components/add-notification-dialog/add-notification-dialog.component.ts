import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-notification-dialog',
  templateUrl: './add-notification-dialog.component.html',
  styleUrl: './add-notification-dialog.component.css'
})
export class AddNotificationDialogComponent {
  form: FormGroup;

  constructor(
      private dialogRef: MatDialogRef<AddNotificationDialogComponent>,
      private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
      description: ['', Validators.required],
      img_url: ['', Validators.required]
    });
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
