import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrl: './manage-products.component.css'
})
export class ManageProductsComponent {

    constructor(private service:ProductService){}
    products:any;

    updated={
      productId:'',
      productName:'',
      productDescription:'',
      productPrice:'',
      productImage:''
    }
    updatenow(product:any){//executed when update button is clicked
      console.log(product)
      this.updated={
        ...product
      }
    }
   
    submitproduct(){//executed when update button in modal is clicked
     this.result= this.service.updateLaptop(this.updated);
     alert(this.result);
    }



  result:any;
    deleteit(pid:any){
       this.result= this.service.deleteLaptop(pid);
       alert(this.result);
    }


    ngOnInit(){
      this.service.getLaptops().subscribe((data)=>{
        this.products=data;
      })
    }
}
