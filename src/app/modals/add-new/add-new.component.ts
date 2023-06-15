import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent {

  addForm!: FormGroup;
  newData: any = null;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddNewComponent>)  {
    this.addForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      image: ['', Validators.required],
      gender: [''],
      species: [''] 
    });
  }

  // Close form
  cancelAction()  {
    this.dialogRef.close();
  }

  // Save new data and return to parent component
  saveAction()  {
    this.newData = this.addForm.value;
    this.dialogRef.close(this.newData);
  }
}
