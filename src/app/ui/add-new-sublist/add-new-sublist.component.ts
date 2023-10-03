import { Component , Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-sublist',
  templateUrl: './add-new-sublist.component.html',
  styleUrls: ['./add-new-sublist.component.scss']
})
export class AddNewSublistComponent {
  constructor(
    public dialogRef: MatDialogRef<AddNewSublistComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
