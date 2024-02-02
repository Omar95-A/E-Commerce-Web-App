import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  products:Product[] = [];
  categories:string[] = [];
  loading:boolean = false;
  cartProducts:any[] = []

  // @Input() data!:Product
  @Output() item = new EventEmitter();

  constructor(private service:ProductsService) { }

  ngOnInit(): void {
    this.getProducts()
    this.getCategories()
  }

  getProducts() {
    this.loading = false;
    this.service.getAllProducts().subscribe((res:any) => {
      this.products = res
    } , error => alert("error")
    )
  }

  getCategories() {
    this.loading = true;
    this.service.getAllCategories().subscribe((res:any) => {
      this.categories = res
      this.loading = false;
    } , error => {
      this.loading = false;
      alert("Error has occurred:"+ error)
    })
  }

  filterCategory(event: any) {

    let value = event.target.value;
    (value == "all") ? this.getProducts() : this.getProductsCategory(value)
  }

  getProductsCategory(keyword: string) {
    this.loading = true;
    this.service.getProductByCategory(keyword).subscribe((res:any) => {
      this.products = res
      this.loading = false;
    } , error => {
      this.loading = false;
      alert("Error has occurred:"+ error)
    })
  }

  addToCart(event:any) {
    if("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProducts.find(i => i.item.id == event.item.id);
      if(exist) {
        alert("Product is already in your cart")
      }else {
        this.cartProducts.push(event)
        localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
      }
    } else {
      this.cartProducts.push(event)
      localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
    }
  }

}
