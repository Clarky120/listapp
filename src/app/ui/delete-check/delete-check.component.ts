import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-check',
  templateUrl: './delete-check.component.html',
  styleUrls: ['./delete-check.component.scss']
})
export class DeleteCheckComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteCheckComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {id: string},
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
