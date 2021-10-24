import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TodoDataService} from "../services/todo-data.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  public itemForm;

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<ModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private todoDataService: TodoDataService) { }

  ngOnInit(): void {
    if (this.data.method === 'add') {
      this.itemForm = this.fb.group({
        subject: ['', Validators.required],
        message: ['', Validators.required],
      });

    } else {
      this.itemForm = this.fb.group({
        subject: [{value: this.data.value.subject, disabled: true}, Validators.required],
        message: [{value: this.data.value.message, disabled: true}, Validators.required],
      });
    }
  }

  addItem() {
    this.todoDataService.addItem(this.itemForm.value);
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }

}
