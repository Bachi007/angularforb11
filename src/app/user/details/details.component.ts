import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  pid:any;laptop:any;
  constructor(private bs:ActivatedRoute,private service:ProductService,private cart:CartService){}
  
  addnow(){
    this.cart.addtoCart(this.laptop);
    alert("added to cart");
  }
  
  
  ngOnInit(){
    this.pid=this.bs.snapshot.paramMap.get("pid")
    if(this.pid){
      this.laptop=this.service.getLaptopById(this.pid);
      console.log(this.laptop)
    }
  }
}
