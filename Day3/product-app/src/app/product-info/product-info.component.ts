import { Component } from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.css'
})
export class ProductInfoComponent {
  productName: string = "Apple MacBook Pro Laptop";
  productPrice: number = 92000;
  imagepath: string = "assets/laptop.jpeg";
  review: string = '';
  onclick(productName:string) :void{
   alert(productName + " added to cart!");
  }
}
