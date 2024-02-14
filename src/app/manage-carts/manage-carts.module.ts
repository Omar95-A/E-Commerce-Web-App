import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCartsComponent } from './components/manage-carts/manage-carts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ManageCartsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ManageCartsModule { }
