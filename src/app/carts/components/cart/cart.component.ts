import { Component, OnInit, NgModule } from '@angular/core';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private service:CartsService) { }
  cartProducts:any[] = [];
  total:number = 0;
  success:boolean = false
  failed:boolean = false

  ngOnInit(): void {
    this.getCartProducts()
  }


  getCartProducts() {
    if("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      this.getCartTotal()
    }
  }

  getCartTotal() {
    this.total = 0
    for(let x in this.cartProducts) {
      this.total += this.cartProducts[x].item.price * this.cartProducts[x].quantity;
    }
  }

  addAmount(index:number) {
    if(this.cartProducts[index].quantity <= 4) {
      this.cartProducts[index].quantity++
    } else {
      this.cartProducts[index].quantity += 0
    }
    this.getCartTotal()
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
  }

  minsAmount(index:number) {
    if(this.cartProducts[index].quantity > 1) {
      this.cartProducts[index].quantity--
    } else {
      this.cartProducts[index].quantity -= 0
    }
    this.getCartTotal()
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
  }

  detectChange() {
    this.getCartTotal()
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
  }

  deleteProduct(index:number) {
    this.cartProducts.splice(index , 1)
    this.getCartTotal()
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
  }

  clearCart() {
    this.cartProducts = []
    this.getCartTotal()
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
  }

  addCart() {
    let products = this.cartProducts.map(item => {
      return {productId:item.item.id , quantity:item.quantity}
    })

    let Model = {
      userId:5,
      date: new Date(),
      products:products
    }

    this.service.createNewCart(Model).subscribe(res => {
      // this.success = true
      products.length >= 1 ? this.success = true : this.failed = true;

    }, error => {
      alert("Your Request Failed To Send: "+ error)
    })

    console.log(Model.products)
  }

}
