import { Injectable } from '@angular/core';
import { product } from './product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  
  productlist:product[]=[
    {
      productId:'1',
      productName:"Asus Tuf Gaming",
      productDescription:"Gaming Laptop",
      productPrice:"45000",
      productImage:"https://dlcdnwebimgs.asus.com/gain/f93bdd99-47d7-4f97-8800-5a83d0bd46a6/"
    },
    {
      productId:'2',
      productName:"Acer Predator",
      productDescription:"Gaming Laptop",
      productPrice:"95000",
      productImage:"https://m.media-amazon.com/images/I/81g7AiqWrtL.jpg"
    },
    {
      productId:'3',
      productName:"HP OMEN ",
      productDescription:"Gaming Laptop",
      productPrice:"95000",
      productImage:"https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/312485_0_yeg1sf.png"
    },
    {
      productId:'4',
      productName:"Alienware",
      productDescription:"Gaming Laptop",
      productPrice:"135000",
      productImage:"https://shwetacomputers.com/cdn/shop/files/laptop-alienware-m18-r2-intel-bk-copilot-gallery-3_30443876-7e32-4b6c-a1be-b89379e0d31e.png?v=1740757403"
    }


  ]

  getLaptops(){
    return of(this.productlist);
  }

  getLaptopById(pid:any){
    return this.productlist.find(i=>i.productId==pid);
  }



  addLaptops(laptop:any){
    this.productlist.push(laptop);
    return "product added successfully"
  }
  deleteLaptop(pid:any){
  const index=this.productlist.findIndex(i=>i.productId==pid);
    if(index==-1){
      return "product not found"
    }
    else{
      this.productlist.splice(index,1);
      return "product deleted"
    }
  }

  updateLaptop(updated:any){
    const index=this.productlist.findIndex(i=>i.productId==updated.productId);
    this.productlist.splice(index,1,updated);
    return "product updated!..."

  }



}
