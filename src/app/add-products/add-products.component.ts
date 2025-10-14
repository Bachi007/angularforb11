import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css'
})
export class AddProductsComponent {

  productForm: FormGroup = new FormGroup("");
  constructor(private fb: FormBuilder,private service:ProductService) {
    this.productForm = this.fb.group({
      productId: ['', Validators.required],
      productName: ['', Validators.required],
      productDescription: ['', Validators.required],
      productPrice: ['', Validators.required],
      productImage: ['', Validators.required],
    })
  }
  result:any;
  addnow(){
   this.result= this.service.addLaptops(this.productForm.value)
   alert(this.result)
   this.productForm.reset();
  }

}
