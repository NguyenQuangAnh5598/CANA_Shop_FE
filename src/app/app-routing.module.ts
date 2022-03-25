import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./component/product/product-list/product-list.component";
import {ProductCreateComponent} from "./component/product/product-create/product-create.component";
import {ProductEditComponent} from "./component/product/product-edit/product-edit.component";
import {LoginComponent} from "./component/user/login/login.component";
import {SignupComponent} from "./component/user/signup/signup.component";
import {HomeComponent} from "./component/home/home.component";
import {AuthGuard} from "./security/auth.guard";
import {CustomerProductDetailComponent} from "./component/customer/customer-product-detail/customer-product-detail.component";
import {CustomerPaymentComponent} from "./component/customer/customer-payment/customer-payment.component";
import {CustomerShopComponent} from "./component/customer/customer-shop/customer-shop.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path: 'home',canActivate: [AuthGuard] , component: HomeComponent,
  children:[
    {path: 'product-list', component: ProductListComponent},
    {path: 'customer-shop', component: CustomerShopComponent},
  ]},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'product-create', component: ProductCreateComponent},
  {path: 'product-edit', component: ProductEditComponent},
  {path:'customer-product-detail', component: CustomerProductDetailComponent},
  {path: 'customer-payment', component: CustomerPaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
