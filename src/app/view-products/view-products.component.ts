import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.css'
})
export class ViewProductsComponent {
  laptops:any;
  constructor(private service:ProductService){}

  ngOnInit(){
    this.service.getLaptops().subscribe((data)=>{
        this.laptops=data;
        console.log(this.laptops)
    })
  }

}
