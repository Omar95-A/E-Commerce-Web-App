import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsModule } from './products/products.module';
import { CartsModule } from './carts/carts.module';
import { ManageCartsModule } from './manage-carts/manage-carts.module';
import { ManageProductsModule } from './manage-products/manage-products.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProductsModule,
    FormsModule,
    ReactiveFormsModule,
    CartsModule,
    ManageCartsModule,
    ManageProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
