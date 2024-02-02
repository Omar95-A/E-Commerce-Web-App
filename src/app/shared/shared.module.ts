import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { SelectComponent } from './components/select/select.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LandingComponent,
    AboutComponent,
    NewArrivalsComponent,
    SelectComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
    exports: [
    HeaderComponent,
    BrowserModule,
    LandingComponent,
    AboutComponent,
    NewArrivalsComponent,
    RouterModule,
    SelectComponent,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    SpinnerComponent
  ]
})
export class SharedModule { }
