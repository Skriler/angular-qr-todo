import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalComponent} from "./modal.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  exports: [ModalComponent]
})
export class ModalModule {
}
