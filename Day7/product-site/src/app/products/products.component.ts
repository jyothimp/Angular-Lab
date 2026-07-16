import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
    products: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://worksheet-catalogue.mashupstack.com/products')
      .subscribe((result) => {
        this.products = result;
      });
  }

}
