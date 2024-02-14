import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ManageProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class ManageProductsModule { }
