import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products:Product[]=[];

  constructor(private productService:ProductService){}

  ngOnInit(){
    this.loadProducts();
  }

  loadProducts(){
    this.productService.getProducts().subscribe(data=>{
      this.products=data;
    });
  }

  delete(id:string){
    if(confirm("Delete Product?")){
      this.productService.deleteProduct(id).subscribe(()=>{
        alert("Deleted Successfully");
        this.loadProducts();
      });

    }

  }

}
