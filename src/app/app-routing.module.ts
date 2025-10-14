import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'admin',component:DashboardComponent,
    children:[
      {path:'add',component:AddProductsComponent},
      {path:'view',component:ViewProductsComponent},
      {path:'manage',component:ManageProductsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
