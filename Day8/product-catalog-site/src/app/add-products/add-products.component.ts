import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css'
})
export class AddProductsComponent {

  productForm=new FormGroup({

    name:new FormControl('',Validators.required),
    price:new FormControl('',Validators.required),
    category:new FormControl('',Validators.required),
    quantity:new FormControl('',Validators.required)

  });

  constructor(private productService:ProductService,

       private router:Router){}

  save(){

    if(this.productForm.valid){
      this.productService.addProduct(this.productForm.value as any)
      .subscribe(()=>{
        alert("Product Added");
        this.router.navigate(['/']);
      });

    }

  }

}
