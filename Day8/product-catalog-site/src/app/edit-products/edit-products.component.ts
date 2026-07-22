import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrl: './edit-products.component.css'
})
export class EditProductsComponent {
   id='';

  productForm=new FormGroup({

    name:new FormControl('',Validators.required),
    price:new FormControl<number|string|null>(null,Validators.required),
    category:new FormControl('',Validators.required),
    quantity:new FormControl<number|string|null>(null,Validators.required)

  });

  constructor(private route:ActivatedRoute,
   private productService:ProductService,
     private router:Router){}

  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    this.productService.getProduct(this.id).subscribe(data=>{
      this.productForm.patchValue(data);
    });

  }

  update(){

    if(this.productForm.valid){
      this.productService.updateProduct(this.id,this.productForm.value as any)
      .subscribe(()=>{
        alert("Updated Successfully");
        this.router.navigate(['/']);
      });

    }

  }

}
