import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { UserdashboardComponent } from './user/userdashboard/userdashboard.component';
import { ProductsComponent } from './user/products/products.component';
import { CartComponent } from './user/cart/cart.component';
import { WishlistComponent } from './user/wishlist/wishlist.component';
import { OrdersComponent } from './user/orders/orders.component';
import { DetailsComponent } from './user/details/details.component';
import { AllordersComponent } from './allorders/allorders.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'user',component:UserdashboardComponent,
    children:[
      {path:'view',component:ProductsComponent},
      {path:'cart',component:CartComponent},
      {path:'wishlist',component:WishlistComponent},
      {path:'orders',component:OrdersComponent},
      {path:'details/:pid',component:DetailsComponent}
    ]
  },
  {path:'admin',component:DashboardComponent,
    children:[
      {path:'add',component:AddProductsComponent},
      {path:'view',component:ViewProductsComponent},
      {path:'manage',component:ManageProductsComponent},
      {path:'allorders',component:AllordersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
