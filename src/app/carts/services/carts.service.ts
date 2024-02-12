import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  getAllCarts() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  createNewCart(model:any) {
    // Here is a problem with environment.baseApi
    return this.http.post(environment.baseApi + 'carts' , model );
    // return this.http.post('https://fakestoreapi.com/carts' , model );
  }
}
