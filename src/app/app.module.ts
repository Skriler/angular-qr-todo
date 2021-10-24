import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
