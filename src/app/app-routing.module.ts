import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductComponent } from './products/components/product/product.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { ManageCartsComponent } from './manage-carts/components/manage-carts/manage-carts.component';
import { ManageProductsComponent } from './manage-products/components/manage-products/manage-products.component';

const routes: Routes = [
  {path:"products" , component:AllProductsComponent},
  {path:"details/:id" , component:ProductsDetailsComponent},
  {path:'cart' , component:CartComponent},
  {path:'manage-carts' , component:ManageCartsComponent},
  {path:'manage-products' , component:ManageProductsComponent},
  {path:"**" , redirectTo:"" , pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
