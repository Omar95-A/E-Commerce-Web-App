import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LandingComponent,
    AboutComponent,
    NewArrivalsComponent
  ],
  imports: [
    CommonModule
  ],
    exports: [
    HeaderComponent,
    BrowserModule,
    LandingComponent,
    AboutComponent,
    NewArrivalsComponent
  ]
})
export class SharedModule { }
