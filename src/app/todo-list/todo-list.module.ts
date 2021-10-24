import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoListRoutingModule} from "./todo-list-routing.module";
import {TodoListComponent} from "./todo-list.component";
import {NgQrScannerModule} from "angular2-qrscanner";
import {ZXingScannerModule} from "@zxing/ngx-scanner";
import {MatButtonModule} from "@angular/material/button";
import {QRCodeModule} from "angularx-qrcode";
import {ModalModule} from "../shared/modal/modal.module";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    NgQrScannerModule,
    ZXingScannerModule,
    MatButtonModule,
    QRCodeModule,
    ModalModule,
    MatIconModule
  ]
})
export class TodoListModule { }
