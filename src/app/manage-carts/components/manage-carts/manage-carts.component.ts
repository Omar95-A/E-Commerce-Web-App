import { Component, OnInit, NgModule } from '@angular/core';
import { ManageCartsService } from '../../services/manage-carts.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ProductsService} from '../../../products/services/products.service';

@Component({
  selector: 'app-manage-carts',
  templateUrl: './manage-carts.component.html',
  styleUrls: ['./manage-carts.component.css']
})
export class ManageCartsComponent implements OnInit {

  constructor(private service:ManageCartsService, private build:FormBuilder , private productService:ProductsService) { }

  carts:any[] = [];
  products:any[] = [];
  total = 0;
  details:any;
  form!: FormGroup;


  ngOnInit(): void {
    this.form = this.build.group({
      start: [''],
      end:['']
    })
    this.getAllCarts();
  }


  getAllCarts() {
    this.service.getAllCarts().subscribe((res:any) => {
      this.carts = res
    })
  }

  applyFilter() {
    console.log( this.form.value)
    let date = this.form.value
    this.service.getAllCarts(date).subscribe((res:any) => {
      this.carts = res
    })
  }

  deleteCart(id:number) {
    this.service.deleteCart(id).subscribe(res => {
      this.getAllCarts()
      alert("Cart deleted Success")
    })
  }

  view(index:number) {
    this.products = []
    this.details = this.carts[index];
    for(let x in this.details.products) {
      this.productService.getProductById(this.details.products[x].productId).subscribe(res => {
        this.products.push({item: res , quantity:this.details.products[x].quantity})
      })
    }
    console.log(this.details)
  }

}
