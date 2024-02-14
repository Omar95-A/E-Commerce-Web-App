import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManageCartsService {

  constructor(private http:HttpClient) { }

  getAllCarts(param?:any) {
    let params = new HttpParams()
    params = params.append("startDate" , param?.start).append("endDate" , param?.end)
    return this.http.get('https://fakestoreapi.com/carts' , {params})
  }

  deleteCart(id:number) {
    return this.http.delete('https://fakestoreapi.com/carts/' + id)
  }
}
