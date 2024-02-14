import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/products/models/product';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  products:Product[] = [];
  categories:string[] = [];
  loading:boolean = false;
  base64:any = '';
  form!:FormGroup

  constructor(private service:ProductsService , private build:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.build.group({
      title: ['' , [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      category: ['', [Validators.required]]
    })
    this.getProducts()
    this.getCategories()
  }


  getProducts() {
    this.loading = true
    this.service.getAllProducts().subscribe((res:any) => {
      this.products = res
      this.loading = false
    } , error => {
      this.loading = false
      alert( error)
    }   )
  }

  getCategories() {
    this.service.getAllCategories().subscribe((res:any) => {
      this.categories = res
    } , error => {
      alert( error)
    })
  }

  getSelectedCategory(event:any) {
    this.form.get('category')?.setValue(event.target.value)
    console.log(this.form)
  }

  getImagePath(event:any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.base64 = reader.result;
        this.form.get('image')?.setValue(this.base64)
        console.log(this.base64)
    };
  }

  addProduct() {
    // console.log(this.form)
    const model = this.form.value
    this.service.createProduct(model).subscribe(res => {
      alert("Add Product Success")
    })
  }

  update(item:any) {
    // this.form.get('title')?.setValue(item.title)
    // this.form.get('price')?.setValue(item.price)
    this.form.patchValue({
      title: item.title,
      price: item.price,
      description: item.description,
      image: item.image,
      category: item.category
    })
    this.base64 = item.image
  }

}
