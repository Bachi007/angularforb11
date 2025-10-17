import { Component } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrl: './allorders.component.css'
})
export class AllordersComponent {
  constructor(private order:OrderService){}
  list:any;
  ngOnInit(){
    this.order.getAllOrders().subscribe((data)=>{
      this.list=data;
    })
  }
}
