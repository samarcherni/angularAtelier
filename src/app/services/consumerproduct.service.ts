import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../core/model/product';

@Injectable({
  providedIn: 'root'
})
export class ConsumerproductService {
  api:string="http://localhost:3000/products"
  constructor(private http:HttpClient) { }
  
  getProduct(){
    return this.http.get<Product[]>(this.api)
  }
  getProductById(id:number){
    return this.http.get<Product[]>(this.api+'/'+id)
  }
  postProduct(product:Product){
    return this.http.post(this.api,product)
  }
  delete(id:number){
    return this.http.delete(this.api+'/'+id)
  }
  updateProduct(id:number, product:Product){
    return this.http.put(this.api+'/'+id,product)
  }
}
