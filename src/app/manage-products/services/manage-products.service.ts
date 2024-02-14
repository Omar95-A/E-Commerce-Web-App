import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ManageProductsService {

  constructor(private http:HttpClient) { }

  createProduct(model:any) {
    return this.http.post(environment.baseApi +'products' , model)
  }
}
