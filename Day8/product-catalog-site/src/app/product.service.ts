import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url="https://worksheet-catalogue.mashupstack.com/products";

  constructor(private http:HttpClient){}

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.url);
  }

  getProduct(id:string):Observable<Product>{
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  addProduct(product:Product){
    return this.http.post(this.url,product);
  }

  updateProduct(id:string,product:Product){
    return this.http.put(`${this.url}/${id}`,product);
  }

  deleteProduct(id:string){
    return this.http.delete(`${this.url}/${id}`);
  }
  
}
