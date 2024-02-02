import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getAllProducts() {
    return this.http.get(environment.baseApi + 'products');
  }
  getAllCategories() {
    return this.http.get(environment.baseApi +'products/categories')
  }
  getProductByCategory(keyword: string) {
    return this.http.get(environment.baseApi +'products/category/' + keyword)
  }

  getProductById(id:any) {
    return this.http.get(environment.baseApi +'products/'+id)
  }


  // from manage products
  createProduct(model:any) {
    return this.http.post(environment.baseApi +'products' , model)
  }

}
